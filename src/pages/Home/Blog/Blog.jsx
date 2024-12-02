import banner from '../../../assets/0113286401.jpeg'

const Blog = () => {
    return (
        <div>
            <img className='w-full' src={banner} alt="" srcset="" />
            <div>
                <h2 className='text-3xl font-bold mt-10'>Thinking asynchronously</h2>
                <p className='mb-10 mt-10'>I started playing with Node.js yesterday. It was easy to pick up, but the hardest part was getting used to thinking in a completely asynchronous manner. I’ve done a ton of work making Windows Forms programs behave asynchronously, but in traditional WinForms programming (before C# async) the process didn’t really require special thought. I’d write isolated synchronous code, test it, then write the framework necessary to make my UI call it asynchronously and respond to the completion events.</p>
                <p className='mb-10 mt-10'>Node.js requires me to think in a completely different way, though looking backwards I can still see how it is analagous. Here’s an example from yesterday’s experiments.</p>
                <p className='mb-10 mt-10'>While I was getting familiar with Node.js, I wrote some code that didn’t do what I expected</p>
                <p className='mb-10 mt-10'>So far I’d only looked at examples of HTTP requests in Node, and noticed those tended to use the data event on streams to respond as data arrived. I was in a case where I knew all my data could easily fit into memory, so I figured I’d stick to something simple and synchronous. The read() function sounded synchronous, so I used it. But every time I ran this code, the console would print “null”. I was especially confounded because the same code worked as expected in the REPL. Worse, some code I had written earlier used this approach and had worked.</p>
                <p className='mb-10 mt-10'>I’d love a Node.js expert to confirm this, but I think I understand it now. In Node.js, you are not expected to attempt to use streams (or at least filesystem streams) synchronously like this. The createReadStream() function creates the stream, but doesn’t guarantee any data has been read into the internal buffer. And the read() function doesn’t block until data is available, it returns null instead. This code has a race condition and will work if the buffer happens to be loaded before you call read(). That’s why it worked in the REPL and my previous programs. (It also makes sense that the REPL might force some data to be loaded on creation to facilitate faster hacking.)</p>
                <p className='mb-10 mt-10'>When I returned to the documentation with a fresh mind, the proper solution was clear to me.</p>
                <p className='mb-10 mt-10'>Creating the stream doesn’t mean it’s ready. But it does emit the readable event when it is ready. So if you want to load data, you have to create the stream and call read() in response to one of the events that indicates data is ready. Then read() will return the data.</p>
                <p className='mb-10 mt-10'>Another thing that caused me pain until I learned to think asynchronously was ensuring an order to stream operations. I needed to compress some data befor sending it to a server, so to test my understanding I wanted to make a program to round-trip compress then decompress. It looked like this:</p>
                <p className='mb-10 mt-10'>The first behavior I didn’t understand was my output statements were out of order. I got “Done writing…” before “Created output file.” The second behavior I didn’t understand is I was not seeing any decompressed output. I had no clue what was wrong and don’t really have a Node.js mentor to ask, so I hacked and hacked at it until I realized both of my problems were related to attacking the problem synchronously.</p>
                <p className='mb-10 mt-10'>The first problem: The statements are out of order because the “Done writing…” output will happen synchronously while the “Created…” output happens after piping the file completes. It’s our good old buddy ‘race condition’. Especially concerning is this means the output file might not be ready before the code tries to read it.</p>
                <p className='mb-10 mt-10'>The second problem was a little weird, and I’d like confirmation I understand it. I thought the last lines were saying, “Set up a pipe() operation that sends data from the compressed input to the unzipper, and as data arrives publish the decompressed data.” Instead, the data was being piped from input to the unzipper and producing a third stream, and I was setting up my result on that stream. But nothing in the program ever causes that result stream to flow data, so the data event is never emitted. Oops.</p>
                <p className='mb-10 mt-10'>The solution to the first problem was to think asynchronously and tell Node.js it should only operate on the output file when the output file stream says it’s done creating the file. The solution to the second was to stop using shortcuts and be more explicit with where I call on():</p>
                <p className='mb-10 mt-10'>This sets up the relationships I wanted. Data flows from the input file to the gzipper to the output file. When that is finished, the code to read the data back is scheduled. Data flows from the compressed file to the gunzipper, and as it is published by the unzipper it is logged to the console.</p>
                <p  className='mb-10 mt-10'>It was sort of tough to figure this stuff out on my own, but I think I get it now. If I extract the decompression code to a function in the above example, it’s easy to see how Node.js is still similar to what I was used to. This is how I visualize the organization of a Node.js application now:</p>
                <p className='mb-10 mt-10'>I’m not sure if that’s the best mental model, but it’s working for me now. It’s tough to do this without a mentor.</p>
            </div>
        </div>
    );
};

export default Blog;
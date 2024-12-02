import aboutimg from '../../../assets/6920933.jpg'

const About = () => {
    return (
        <div className="hero pl-12 min-h-screen">
  <div className="hero-content flex-col gap-48 lg:flex-row">
    <img
      src={aboutimg}
      className="max-w-sm rounded-lg " />
    <div>
      <h1 className="text-5xl font-bold">About Books !</h1>
      <p className="py-6">
      books are a good way to discover some of the world's best <br /> literature  and often offer insights into writers and excerpts of  <br /> their work. They’re a good way to learn more about a new genre and <br />grow your reading list, and some of our favouritesare also great for gifting.
      </p>
      <button className="btn btn-primary">Reed More</button>
    </div>
  </div>
</div>
    );
};

export default About;
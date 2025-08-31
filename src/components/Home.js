import React from "react";

function Home() {
  const posts = [
    {
      date: "Apr 18, 2024",
      title: "CM Fixed Income: Exiting Banking & PSU to Add a New Gilt Fund",
      desc: "We are increasing the duration of our Fixed Income portfolio..."
    },
    {
      date: "Apr 05, 2024",
      title: "Craftsman Automation: Poised for Growth Amid Temporary Headwinds",
      desc: "Craftsman Automation excels in making precise parts..."
    },
    {
      date: "Apr 03, 2024",
      title: "The Focused Way of Investing: Our Four-Quadrant Strategy and FY24 Review",
      desc: "FY24 brought us a 42% gain in our Capitalmind Focused portfolio..."
    },
    {
      date: "Apr 09, 2024",
      title: "Money Magic: Regular SIPs can make you wealthy ??",
      desc: "By just investing 10k per month you will become crorepati in 20 yrs..."
    },
     {
      date: "Apr 29, 2024",
      title: "India Post announces suspension of all US-bound mail bookings amid regulatory uncertainty",
      desc: "The Department of Posts, in a statement issued on Sunday, said that it has suspended the booking of all categories"
    }


  ];

  return (
    <div>
      <h1>Home</h1>
      <h3>Latest Posts</h3>

      <div className="posts">
        {posts.map((p, i) => (
          <div key={i} className="post">
            <p className="date">{p.date}</p>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href="#">Read full post</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

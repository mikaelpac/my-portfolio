import TimelineItem from "../../components/TimelineItem";
import hotrad from "./../../../public/images/hotrad.png";
import blufvpn2 from "./../../../public/images/blufvpn2.png";
import appscreen from "./../../../public/images/appscreen.png";

const MyTimeline = () => {
  return (
    <div
      className="bg-white dark:bg-slate-950 text-black dark:text-white py-2 px-2  md:px-6 mx-auto"
      id="experience"
    >
      <div className="max-w-5xl m-auto">
        <h2 className="text-center text-4xl mb-6 mt-4">Experience</h2>
        <TimelineItem
          title="Hot Rad TV"
          description="At Hot Rad TV (a heavy music live streaming site) I had the role of a Full Stack Developer, taking on the responsibility of overhauling the site's UI, creating checkout flows and more. I learned how to manage all the systems pertaining to a larger project and independently solve challenges, be it on the front- or the backend."
          image={hotrad}
          duration="2022 Q2 - 2023 Q2"
          reverse={true}
          link="https://www.hotrad.tv"
        />
        <TimelineItem
          title="BLUF VPN"
          description="At BLUF VPN one of my main tasks was to create a React-based admin dashboard for user management. In addition to more frontend experience, this project allowed me to learn the basics of backend development as I needed to create new endpoints utilizing NodeJS, GraphQL and PostgreSQL. I also got accustomed to working in a team embracing agile workflows."
          image={blufvpn2}
          duration="2021 Q3 - 2022 Q2"
          reverse={false}
          link="https://blufvpn.com"
        />
        <TimelineItem
          title="AO Solutions Oy"
          description="At AO Solutions Oy, I completed my internship and was from the get-go given the responsibility of creating a Flutter-based mobile app MVP, which taught me all the fundamentals of front-end development. I had the chance to design and implement the UI myself, fetching and displaying data from endpoints created by my co-worker."
          image={appscreen}
          duration="2020 Q2 - 2020 Q4"
          reverse={true}
          link={null}
        />
      </div>
    </div>
  );
};

export default MyTimeline;

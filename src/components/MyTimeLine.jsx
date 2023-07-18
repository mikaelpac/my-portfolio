import TimelineItem from "./TimelineItem";
import hotrad from './../../public/images/hotrad.png'
import blufvpn from './../../public/images/blufvpn.png'
import digikuitti from './../../public/images/digikuitti.png'


const MyTimeline = () => {
  return (
    <div className="container p-4 md:p-10 mx-auto" id="experience" >
      <TimelineItem
        title="Hot Rad TV"
        description="I've had the privilege to work at Hot Rad TV (a heavy music livestreaming site) as a lead Full Stack Developer, taking on the responsibility of overhauling the site's UI, creating checkout flows and so much more. At Hot Rad I learned how to manage all the systems pertaining to a larger project and independently solve challenges, be it on the front- or the backend."
        image={hotrad}
        duration="2022 Q2 - 2023 Q2"
        reverse={true}
      />
      <TimelineItem
        title="BLUF VPN"
        description="At BLUF VPN, in addition to React-based front-end development, I got the chance to dip my toes into the backend, utilizing NodeJS, GraphQL and PostgreSQL to create endpoints and complete various tasks. I also got very used to working in a team which embraced agile workflows."
        image={blufvpn}
        duration="2021 Q2 - 2022 Q2"
        reverse={false}
      />
        <TimelineItem
        title="AO Solutions Oy"
        description="At AO Solutions Oy, I completed my work practice and was from the get-go given the responsibility of creating a Flutter-based mobile app MVP, which taught me all the fundamentals of front-end development. I had the chance to design and implement the UI myself, fetching and displaying data from endpoints created by my co-worker."
        image={digikuitti}
        duration="2020 Q2 - 2020 Q4"
        reverse={true}
      />
    </div>
  );
};

export default MyTimeline;
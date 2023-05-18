import AllEvents from '../../src/components/events/events-page'; 

const EventsPage = ({ data }) => { //komponenten er lik data 
  return <AllEvents data={data} />; //alle produkter er lik data
};

export default EventsPage; 

export async function getStaticProps() {
  const { events_categories } = await import('../../data/data.json'); //"events_categories" som er produktens kategorier
  return {
    props: { //props som skal passe gjennom mange komponenter som skal modifisere data'en
      data: events_categories,//er lik produktenes kategorier
    },
  };
}

import TeamMembers from "@/app/Components/Util/_Team";


const team = [
    {
      name: "Samantha Koch",
      role: "Chief Excecutive Officer",
      bio: "10+ years in tax compliance and dispute resolution with SARS.",
      imageUrl: "/Samantha_Koch.jpg"
    }
    , {
      name: "Lorinda Deysel",
      role: "Chief Financial Officer",
      bio: "Extensive experience in Business Operations",
      imageUrl: "/Lorinda_Deysel.jpg"}]
  
  
  export default function About() {
    return (
      <div className="p-4">
  
          <TeamMembers team={team}/>
  
  
  
      </div>
    );
  }
  
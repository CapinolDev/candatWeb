import ChromaGrid from './people'

const teamMembers = [
  {
    image: "https://static01.nyt.com/images/2021/12/01/nyregion/01maxwell-trial-epstein-suicide01/merlin_184952091_a2fbdaef-ea7c-41e3-b512-3cd3f16d0f58-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    title: "Jeffrey Epstein",
    subtitle: "Pedofil",
    handle: "@jeffreyepstein",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #eff5ffff, #4b6357ff)",
    url: "https://cs.wikipedia.org/wiki/Jeffrey_Epstein"
  },
  {
    image: "https://i.pravatar.cc/300?img=2",   
    title: "Ding dong negr",
    subtitle: "Otrok",
    handle: "@negrozmrd",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://www.nigger.com"
  }
];

const NasTym = () => (
  <div style={{ height: '600px', position: 'relative' }}>
    <ChromaGrid 
      items={teamMembers}
      radius={300}
      damping={0.45}
      fadeOut={0.6}
      ease="power3.out"
    />
  </div>
)

export default NasTym

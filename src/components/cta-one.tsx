
export default function CtaOne({bg}:{bg:string}) {
  return (
    <section className="relative md:py-56 py-36 bg-no-repeat bg-center bg-fixed bg-cover" style={{backgroundImage:`url(${bg})`}}></section>
  )
}

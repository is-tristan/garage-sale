export default function Banner({ heading = "", text = "" , centered = true }) {

    return (

        <>
            <section className="row banner" aria-label="Banner Section">

                <div className={`container ${centered ? " centered" : undefined}`}>

                    <div className="heading">

                        <h1>{heading}</h1>

                        <p>{text}</p>

                    </div>

                </div>

            </section>

        </>

    )

}
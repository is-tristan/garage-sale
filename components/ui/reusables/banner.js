export default function Banner({ heading = "", text = "" }) {

    return (

        <>
            <section className="row banner">

                <div className="container">

                    <div className="heading">

                        <h1>{heading}</h1>

                        <p>{text}</p>

                    </div>

                </div>

            </section>

        </>

    )

}
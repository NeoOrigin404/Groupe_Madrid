import SeriesCard from "./SeriesCard";

interface TypeSeries {
    serie: {
        titre : string;
        année: string;
        saison: string;

    }
}

export default function SerieList({serie} : TypeSerie) {
return (
    <>
        <div>
            {SeriesCard.map(indexSeries) => (
                <button
                    type="button"
                    key =""
                    >
                        {}
                    </button>

            )

            }
        



        </div>
    
    
    </>
)
}

import ReactStars from "react-rating-stars-component";

const ReactStarReview = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <>
            <ReactStars
                count={5}
                value={3.5}
                edit={false}
                onChange={ratingChanged}
                size={80}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
        </>
    )
}

export default ReactStarReview
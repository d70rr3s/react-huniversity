export const Item = ({level, content, onClick}) => {
    return(
        <div className={`carousel__item carousel__item--level${level}`} onClick={onClick}>
            {content}
        </div>
    );
}
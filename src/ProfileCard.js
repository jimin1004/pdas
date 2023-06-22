function ProfileCard({ title, handle, image, content }) {
    //props object에 있는 모든 property를 사용하지 않기 때문에 이런식으로 destructuring을 많이 한대

    // const title = props.title; 
    // const handle = props.handle;

    //Destructuring 위의 두 라인과 동일한 역할
    //const {title, handle} = props; // title과 handle이라는 변수를 만들어서 props라는 object 대입

    return (
        <div className="card" style={{ minHeight: "100%" }}>
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt={"pda logo of " + JSON.stringify(title)} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">
                    {content}
                </div>
            </div>

        </div>
    );
};

export default ProfileCard;

import ProfileImg from "../assets/profile.jpeg";

const AboutMe = () => {
    return (
        <div className="w-[90%] lg:max-w-[1280px] mx-auto">
            <h2 className="font-bold text-2xl text-center mt-6 mb-6 uppercase">About Me</h2>
            <div>
                <div className="flex items-center justify-center">
                    <img className="rounded-full w-[350px] h-[350px] object-cover" src={ProfileImg} alt="" />
                </div>
                <h1 className="text-center font-bold text-2xl my-2">Ali Asraf Shakil</h1>
                <p className="text-center my-3 font-semibold">{"I'm a Data Analyst with over 1 years of experience"}</p>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet, saepe quia cumque aperiam dicta mollitia doloremque laudantium, voluptatem esse aliquid impedit voluptate, dolorem vel adipisci molestiae optio praesentium eum corporis exercitationem velit. Laboriosam maiores natus aliquid tenetur quod a illum cupiditate reiciendis ipsum consequuntur beatae esse non sint sequi, architecto perferendis velit dolor voluptate voluptas praesentium quos in minima exercitationem dolores. Autem, iste molestiae corrupti ratione sequi temporibus veritatis dicta velit dignissimos suscipit delectus earum commodi nihil porro iure beatae nesciunt fugit minima ipsum illum quisquam. Ea esse dolorem aliquid iste saepe laborum, tenetur ipsum molestiae praesentium consectetur corrupti?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
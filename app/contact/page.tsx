import Form from "@components/contact/Form";
import HeaderContact from "@components/contact/HeaderContact";


export default function ContactPage() {
    return (
        <div className="home bg-dark03 uppercase">

            <HeaderContact />
            <Form />
        </div>
    );
}

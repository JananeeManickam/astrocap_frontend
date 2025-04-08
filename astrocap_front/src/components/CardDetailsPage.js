// pages/CardDetailPage.js
import { useParams } from "react-router-dom";

export default function CardDetailPage() {
    const { id } = useParams();

    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", padding: "2rem" }}>
            <h1 className="mb-4">Image {id} has been clicked</h1>
            <img
                src={`/images/image${id}.jpg`} // Replace with actual image logic or remove this line
                alt={`Image ${id}`}
                style={{ maxWidth: "400px", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}
            />
        </div>
    );
}

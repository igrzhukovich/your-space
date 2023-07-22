import AuthCheck from "@/components/AuthCheck";
import Counter from "@/components/counter";

export default function Home() {
    return (
        <div>
            <h2>Hello!</h2>
            <AuthCheck>
                <Counter />
            </AuthCheck>
        </div>
    );
}

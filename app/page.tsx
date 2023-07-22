import AuthCheck from "@/components/AuthCheck";
import CounterReact from "@/components/CounterReact";
import CounterRedux from "@/components/CounterRedux";

export default function Home() {
    return (
        <div>
            <h2>Hello!</h2>
            <AuthCheck>
                <CounterReact />
                <CounterRedux />
            </AuthCheck>
        </div>
    );
}

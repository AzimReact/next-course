import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"ulbi tv, nextjs, " + keywords}></meta>
                <title>Main page</title>
            </Head>
            <div className="navbar">
                <A text={'Main page'} href={'/'} />
                <A text={'Users page'} href={'/users'} />

            </div>
            {children}
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }

                `}
            </style>
        </>
    );
};

export default MainContainer;
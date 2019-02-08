import Link from 'next/link'

export default class IndexPage extends React.Component{
    render(){
        return (
            <div>
                <p className="title">Voting </p>
                <p>注意：Metamaskが入っていないブラウザでは動作しません．</p>

                <Link href="./dapp">
                    <buttom className="btn" >Voting Pageへ</buttom>
                </Link>

                <style jsx>{`
                    .title {
                        font-size:40px;
                        width:100%;
                    }

                    .app{
                        font-size:20px;
                        padding: 8px 24px;
                        display: inline-block;
                    }

                    div {
                        text-align:center
                    }

                    .btn {
                        margin-top:30px;
                        padding: 8px 24px;
                        color: white;
                        display: inline-block;
                        opacity: 0.8;
                        border-radius: 4px;
                        text-align: center;
                        background-color: #239b76;
                      }

                    .btn:hover {
                        opacity: 1;
                    }
                `}</style>
            </div>
        )
    }
}
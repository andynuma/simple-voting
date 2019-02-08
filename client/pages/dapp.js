import { GetOwnerInfo } from "../components/getOwnerInfo";
import { SetUserInfo } from "../components/createVote";
import { ViewResult } from "../components/viewResult";
import { UserInfo } from "../components/userInfo";
import Link from "next/link";

class Dapp extends React.Component {
    render() {
      return (
        <div>
            <UserInfo />
            <GetOwnerInfo />
            <SetUserInfo />
            {/* <ViewResult /> */}
            <Link href="./result">
                    <buttom className="btn" >See the Result</buttom>
            </Link>

            <style jsx>{`
            .btn {
                margin-top:90px;
                padding: 8px 24px;
                color: white;
                display: inline-block;
                opacity: 0.8;
                border-radius: 4px;
                text-align: center;
                background-color: red;
              }

            .btn:hover {
                opacity: 1;
            }
            `}</style>
        </div>
      )
    }
}

export default Dapp;
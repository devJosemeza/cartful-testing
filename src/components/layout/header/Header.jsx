import { HeaderStyles } from "./HeaderStyles"

export const Header = () => {
    return (
        <HeaderStyles>

            <div className="wrapper">
                <div className="title">
                    <a href="/">
                        The Coffee Shop
                    </a>
                </div>

                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
            </div>

        </HeaderStyles>
    )
  }
  
  
import style from './contactFrom.module.scss'

export default function ContactFrom() {
  return (
    <>
        <h1 className={style.mainheading}>Contact Form</h1>

        <div className={style.container}>
            <form action="" method="POST">
                <p>Name:<input className={style.inputtext} type="text" name="name" placeholder="Enter your name" required /></p>
                <fieldset className="fieldset">
                    <legend>Gender</legend>
                <p>
                Male<input type="radio" name="Gender" id="Male"/>
                Female<input type="radio" name="Gender" id="Female"/>
                </p>
                </fieldset>

                <p>Address: <textarea className={style.inputtext} name="address" placeholder="Enter your address" id="address" cols="10" rows="8"></textarea></p>

                <p>Email:<input className={style.inputtext} type="email" name="email" placeholder="Enter your email id" id="email"/></p>
                <input className={style.inputsubmit} type="submit" value="submit"/>
            </form>
        </div>
    </>
  )
}

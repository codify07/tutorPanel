import { Grid, Button } from '@mui/material'
import React,{useState} from 'react'
import certificate from '../../assets/documentpdf.png'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import istock from '../../assets/istock.png'
import './registrationComponents.css'
import { createBrowserHistory } from 'history';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link } from 'react-router-dom'
import { TutorAppBar,AppBar } from '../../components/abbbar/appbar'
import {Footer} from '../../components/footer/footer'
import {TutorFooter} from '../../components/footer/footer'



export const TutorCertificates = () => {
   

    return (
        <>

            <div className='register-body-header-container-tutor' style={{ backgroundImage: `url(${istock})`, backgroundRepeat: 'no-repeat', }}  >
                <p>
                    start learning
                </p>
                <h1>
                    Register for Amaf classes
                </h1>
            </div>

            <div className='component-register-certificates-style-container' >
                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <div className='component-register-certificates-heading-tutor' >
                            <p>
                                Add your certificate
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='component-register-field-container'>
                            <p>
                                Add your Education Certificate
                            </p>
                        </div>

                    </Grid>
                    <Grid item xs={12} md={6} lg={3} >
                        <div style={{ width: '100%', height: "100%" }} >
                            <img src={certificate} alt="certificate" style={{ width: '100%', height: '100%' }} />
                        </div>

                    </Grid>
                    <Grid item xs={12} md={6} lg={3} >
                        <div style={{ width: '100%', height: "100%" }} >
                            <img src={certificate} alt="certificate" style={{ width: '100%', height: '100%' }} />
                        </div>

                    </Grid>
                    <Grid item xs={12} md={6} lg={3} >
                        <div className='component-register-add-certificate-btn-container' >
                            <Button className='component-register-add-certificate-btn' >
                                <AddOutlinedIcon style={{ fontSize: '80px' }} />
                            </Button>
                        </div>
                        <p style={{ color: 'gray', marginTop: '5px' }} >
                            (upload only pnj.jpg.pdf)
                        </p>
                    </Grid>
                </Grid>


                {/* experience */}

                <div style={{ marginTop: '50px' }} >
                    <Grid container spacing={2} >

                        <Grid item xs={12} >
                            <div className='component-register-field-container'>
                                <p>
                                    Add your Experience Certificate
                                </p>
                            </div>

                        </Grid>
                        <Grid item xs={12} md={6} lg={3} >
                            <div style={{ width: '100%', height: "100%" }} >
                                <img src={certificate} alt="certificate" style={{ width: '100%', height: '100%' }} />
                            </div>
                            <p style={{ color: 'gray', marginTop: '5px' }} >
                                (upload only pnj.jpg.pdf)
                            </p>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} >
                            <div className='component-register-add-certificate-btn-container' >
                                <Button className='component-register-add-certificate-btn' >
                                    <AddOutlinedIcon style={{ fontSize: '80px' }} />
                                </Button>
                            </div>
                            <p style={{ color: 'gray', marginTop: '5px' }} >
                                (upload only pnj.jpg.pdf)
                            </p>
                        </Grid>
                    </Grid>
                </div>


                {/* add your document */}

                <div style={{ marginTop: '50px' }} >
                    <Grid container spacing={2} >

                        <Grid item xs={12} >
                            <div className='component-register-field-container'>
                                <p>
                                    Add your Document
                                </p>
                            </div>

                        </Grid>
                        <Grid item xs={3} >
                            <div style={{ width: '100%', height: "100%" }} >
                                <img src={certificate} alt="certificate" style={{ width: '100%', height: '100%' }} />
                            </div>

                        </Grid>
                        <Grid item xs={12} md={6} lg={3} >
                            <div className='component-register-add-certificate-btn-container' >
                                <Button className='component-register-add-certificate-btn' >
                                    <AddOutlinedIcon style={{ fontSize: '80px' }} />
                                </Button>
                            </div>
                            <p style={{ color: 'gray', marginTop: '5px' }} >
                                (upload only pnj.jpg.pdf)
                            </p>
                        </Grid>
                    </Grid>
                </div>

                {/* save button */}

                <div style={{ marginTop: '20px' }} >
                    <Grid container  >
                        <Grid item xs={12} >
                            <div className='component-register-register-btn-container' >
                                <Link to='/tutor-home'  variant='text' className='component-register-register-btn'  >
                                    save & continue
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </div>

            </div>

        </>
    )
}

// student registration

export const StudentRegistration = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>

            <div>

                {/* ____ app bar _____ */}

                <div>
                    <AppBar />
                </div>

                {/* _______ boody ______ */}

                <div className='register-body-header-container' style={{ backgroundImage: `url(${istock})`, backgroundRepeat: 'no-repeat', }}  >
                    <p>
                        start learning
                    </p>
                    <h1>
                        Register for Amaf classes
                    </h1>
                </div>

                {/* ______ main body ____ */}

                <div className='register-body-container' >
                    <div className="register-body-content-wrapper" >
                        <div className='register-body-heading' >
                            <h1>
                                Register with amaf classes
                            </h1>
                        </div>

                        {/* tabs */}


                        <div className='register-tabs-links-container' >
                            <Link to='/register-student' className="register-tabs-btn">
                                <p>
                                    student
                                </p>
                            </Link>
                            <Link to='/register-tutor' className="register-tabs-btn">
                                <p>
                                    tutor
                                </p>
                            </Link>
                            <Link to='/registerinstitute' className="register-tabs-btn">
                                <p>
                                    institute
                                </p>
                            </Link>
                            <Link to='/register-parents' className="register-tabs-btn">
                                <p>
                                    parents
                                </p>
                            </Link>


                        </div>

                        {/* form  */}

                        <div className='register-form-container' >
                            <Grid container columnSpacing={6} rowSpacing={1} >
                                <Grid item xs={12} md={6} >
                                    <div className='register-field-container' >
                                        <p>
                                            first name
                                        </p>
                                        <input type='text' />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <div className='register-field-container' >
                                        <p>
                                            last name
                                        </p>
                                        <input type='text' />
                                    </div>
                                </Grid>
                                <Grid item xs={12} >
                                    <div className='register-field-container' >
                                        <p>
                                            email
                                        </p>
                                        <input type='email' />
                                    </div>
                                </Grid>
                                {/* birth date */}
                                <Grid item xs={12} md={4} >
                                    <div className='register-field-container' >
                                        <p>
                                            birthdate
                                        </p>
                                        <select id="month" name="month">
                                            <option value='' disabled >Month</option>
                                            <option value="01">January</option>
                                            <option value="02">February</option>
                                            <option value="03">March</option>
                                            <option value="04">April</option>
                                            <option value="05">May</option>
                                            <option value="06">June</option>
                                            <option value="07">July</option>
                                            <option value="08">August</option>
                                            <option value="09">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </select>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={4} >
                                    <div className='register-field-container' >

                                        <select style={{ marginTop: '30px' }} id="date" name="date">
                                            <option vlaue='' disabled >Date</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select>

                                    </div>
                                </Grid>
                                <Grid item xs={12} md={4} >
                                    <div className='register-field-container' >

                                        <select style={{ marginTop: '30px' }} id="year" name="year">
                                            <option value='' disabled  >Year</option>
                                            <option value="1940">1940</option>
                                            <option value="1941">1941</option>
                                            <option value="1942">1942</option>
                                            <option value="1943">1943</option>
                                            <option value="1944">1944</option>
                                            <option value="1945">1945</option>
                                            <option value="1946">1946</option>
                                            <option value="1947">1947</option>
                                            <option value="1948">1948</option>
                                            <option value="1949">1949</option>
                                            <option value="1950">1950</option>
                                            <option value="1951">1951</option>
                                            <option value="1952">1952</option>
                                            <option value="1953">1953</option>
                                            <option value="1954">1954</option>
                                            <option value="1955">1955</option>
                                            <option value="1956">1956</option>
                                            <option value="1957">1957</option>
                                            <option value="1958">1958</option>
                                            <option value="1959">1959</option>
                                            <option value="1960">1960</option>
                                            <option value="1961">1961</option>
                                            <option value="1962">1962</option>
                                            <option value="1963">1963</option>
                                            <option value="1964">1964</option>
                                            <option value="1965">1965</option>
                                            <option value="1966">1966</option>
                                            <option value="1967">1967</option>
                                            <option value="1968">1968</option>
                                            <option value="1969">1969</option>
                                            <option value="1970">1970</option>
                                            <option value="1971">1971</option>
                                            <option value="1972">1972</option>
                                            <option value="1973">1973</option>
                                            <option value="1974">1974</option>
                                            <option value="1975">1975</option>
                                            <option value="1976">1976</option>
                                            <option value="1977">1977</option>
                                            <option value="1978">1978</option>
                                            <option value="1979">1979</option>
                                            <option value="1980">1980</option>
                                            <option value="1981">1981</option>
                                            <option value="1982">1982</option>
                                            <option value="1983">1983</option>
                                            <option value="1984">1984</option>
                                            <option value="1985">1985</option>
                                            <option value="1986">1986</option>
                                            <option value="1987">1987</option>
                                            <option value="1988">1988</option>
                                            <option value="1989">1989</option>
                                            <option value="1990">1990</option>
                                            <option value="1991">1991</option>
                                            <option value="1992">1992</option>
                                            <option value="1993">1993</option>
                                            <option value="1994">1994</option>
                                            <option value="1995">1995</option>
                                            <option value="1996">1996</option>
                                            <option value="1997">1997</option>
                                            <option value="1998">1998</option>
                                            <option value="1999">1999</option>
                                            <option value="2000">2000</option>
                                            <option value="2001">2001</option>
                                            <option value="2002">2002</option>
                                            <option value="2003">2003</option>
                                            <option value="2004">2004</option>
                                            <option value="2005">2005</option>
                                            <option value="2006">2006</option>
                                            <option value="2007">2007</option>
                                            <option value="2008">2008</option>
                                            <option value="2009">2009</option>
                                            <option value="2010">2010</option>
                                            <option value="2011">2011</option>
                                            <option value="2012">2012</option>
                                            <option value="2013">2013</option>
                                            <option value="2014">2014</option>
                                            <option value="2015">2015</option>
                                            <option value="2016">2016</option>
                                            <option value="2017">2017</option>
                                            <option value="2018">2018</option>
                                            <option value="2019">2019</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                        </select>

                                    </div>
                                </Grid>
                                {/* gender */}
                                <Grid item xs={12} md={6} >
                                    <div className='register-field-container' >
                                        <p>
                                            gender
                                        </p>
                                        <select id="gender" name="gender">
                                            <option value=""></option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <div className='register-field-container' >
                                        <p>
                                            Language
                                        </p>
                                        <select id="language" name="language">
                                            <option></option>
                                            <option value="">arabic</option>
                                            <option value="english">English</option>

                                        </select>
                                    </div>
                                </Grid>
                                {/* country and state row */}
                                <Grid item xs={12} md={6} >
                                    <div className='register-field-container' >
                                        <p>
                                            Country
                                        </p>
                                        <select id="country" name="country">
                                            <option></option>
                                            <option value="dubai">dubai</option>

                                        </select>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <div className='register-field-container' >
                                        <p>
                                            State
                                        </p>
                                        <select id="country" name="country">
                                            <option value=""></option>

                                        </select>
                                    </div>
                                </Grid>
                                {/* mobile number row */}
                                <Grid item xs={12} md={12} >
                                    <div className='register-field-container' >
                                        <p>
                                            mobile number
                                        </p>
                                        <PhoneInput

                                            value={phoneNumber}
                                            onChange={setPhoneNumber} className="PhoneInputInput" />
                                    </div>
                                </Grid>
                                {/* address bar */}
                                <Grid item xs={12}  >
                                    <div className='register-field-container' >
                                        <p>
                                            Address
                                        </p>
                                        <input type='text' />
                                    </div>
                                </Grid>
                                {/* password and confirm password bar */}
                                <Grid item xs={12} md={6} >
                                    <div className='register-field-container' >
                                        <p>
                                            password
                                        </p>
                                        <input type='password' />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <div className='register-field-container' >
                                        <p>
                                            confirm password
                                        </p>
                                        <input type='password' />
                                    </div>
                                </Grid>
                                {/* select interest bar */}
                                <Grid item xs={12}  >
                                    <div className='register-field-container' >
                                        <p>
                                            Select your Interest
                                        </p>
                                        <select id="interest" name="interest">
                                            <option value=""></option>

                                        </select>
                                    </div>
                                </Grid>
                                {/* add your certificate */}
                                <Grid item xs={12} >
                                    <div className='register-field-container'>
                                        <p>
                                            add your certificate
                                        </p>
                                    </div>

                                </Grid>
                                <Grid item xs={3} >
                                    <div style={{ width: '100%', height: "100%" }} >
                                        <img src={certificate} alt="certificate" style={{ width: '100%', height: '100%' }} />
                                    </div>
                                    <p style={{ color: 'gray', marginTop: '5px' }} >
                                        (upload only pnj.jpg.pdf)
                                    </p>
                                </Grid>
                                <Grid item xs={3} >
                                    <div className='register-add-certificate-btn-container' >
                                        <Button className='register-add-certificate-btn' >
                                            <AddOutlinedIcon style={{ fontSize: '80px' }} />
                                        </Button>
                                    </div>
                                </Grid>
                                {/* register btn */}
                                <Grid item xs={12} >
                                    <div className='register-register-btn-container' >
                                        <Button variant='text' className='register-register-btn' onClick={() => {
                                            createBrowserHistory().push('/login-otp');
                                            window.location.reload();
                                        }} >
                                            Register
                                        </Button>
                                    </div>
                                </Grid>

                            </Grid>
                        </div>






                    </div>
                </div>

                {/* ************* F O O T E R **************** */}

                <div style={{ marginTop: '-80px' }} >
                    <Footer />
                </div>



            </div>

        </>
    )
}


// tutor registration

export const TutorRegistration = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>

            <div>

                {/* ____ app bar _____ */}

                <div>
                    <TutorAppBar />
                </div>

                {/* _______ boody ______ */}

                <div className='register-body-header-container-tutor' style={{ backgroundImage: `url(${istock})`, backgroundRepeat: 'no-repeat', }}  >
                    <p>
                        start learning
                    </p>
                    <h1>
                        Register for Amaf classes
                    </h1>
                </div>

                {/* ______ main body ____ */}

                <div className='register-body-container' >
                    <div className="register-body-content-wrapper" >
                        <div className='register-body-heading-tutor' >
                            <h1>
                                Register with amaf classes
                            </h1>
                        </div>

                        {/* tabs */}


                        <div className='register-tabs-links-container' >
                            <Link to='/register-student' className="register-tabs-btn">
                                <p>
                                    student
                                </p>
                            </Link>
                            <Link to='/register-tutor' className="register-tabs-btn">
                                <p>
                                    tutor
                                </p>
                            </Link>
                            <Link to='/register-institute' className="register-tabs-btn">
                                <p>
                                    institute
                                </p>
                            </Link>
                            <Link to='register/parents' className="register-tabs-btn">
                                <p>
                                    parents
                                </p>
                            </Link>


                        </div>

                        {/* form  */}



                        <div className='register-form-container' >
                            <Grid container columnSpacing={6} rowSpacing={1} >
                                <Grid item xs={12} md={6} >
                                    <div className='register-field-container' >
                                        <p>
                                            first name
                                        </p>
                                        <input type='text' />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <div className='register-field-container' >
                                        <p>
                                            last name
                                        </p>
                                        <input type='text' />
                                    </div>
                                </Grid>
                                <Grid item xs={12} >
                                    <div className='register-field-container' >
                                        <p>
                                            email
                                        </p>
                                        <input type='email' />
                                    </div>
                                </Grid>
                                {/* birth date */}
                                <Grid item xs={12} md={4} >
                                    <div className='register-field-container' >
                                        <p>
                                            birthdate
                                        </p>
                                        <select id="month" name="month">
                                            <option>Month</option>
                                            <option value="01">January</option>
                                            <option value="02">February</option>
                                            <option value="03">March</option>
                                            <option value="04">April</option>
                                            <option value="05">May</option>
                                            <option value="06">June</option>
                                            <option value="07">July</option>
                                            <option value="08">August</option>
                                            <option value="09">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </select>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={4} >
                                    <div className='register-field-container' >

                                        <select style={{ marginTop: '30px' }} id="date" name="date">
                                            <option>Date</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select>

                                    </div>
                                </Grid>
                                <Grid item xs={12} md={4} >
                                    <div className='register-field-container' >

                                        <select style={{ marginTop: '30px' }} id="year" name="year">
                                            <option>Year</option >
                                            <option value="1940">1940</option>
                                            <option value="1941">1941</option>
                                            <option value="1942">1942</option>
                                            <option value="1943">1943</option>
                                            <option value="1944">1944</option>
                                            <option value="1945">1945</option>
                                            <option value="1946">1946</option>
                                            <option value="1947">1947</option>
                                            <option value="1948">1948</option>
                                            <option value="1949">1949</option>
                                            <option value="1950">1950</option>
                                            <option value="1951">1951</option>
                                            <option value="1952">1952</option>
                                            <option value="1953">1953</option>
                                            <option value="1954">1954</option>
                                            <option value="1955">1955</option>
                                            <option value="1956">1956</option>
                                            <option value="1957">1957</option>
                                            <option value="1958">1958</option>
                                            <option value="1959">1959</option>
                                            <option value="1960">1960</option>
                                            <option value="1961">1961</option>
                                            <option value="1962">1962</option>
                                            <option value="1963">1963</option>
                                            <option value="1964">1964</option>
                                            <option value="1965">1965</option>
                                            <option value="1966">1966</option>
                                            <option value="1967">1967</option>
                                            <option value="1968">1968</option>
                                            <option value="1969">1969</option>
                                            <option value="1970">1970</option>
                                            <option value="1971">1971</option>
                                            <option value="1972">1972</option>
                                            <option value="1973">1973</option>
                                            <option value="1974">1974</option>
                                            <option value="1975">1975</option>
                                            <option value="1976">1976</option>
                                            <option value="1977">1977</option>
                                            <option value="1978">1978</option>
                                            <option value="1979">1979</option>
                                            <option value="1980">1980</option>
                                            <option value="1981">1981</option>
                                            <option value="1982">1982</option>
                                            <option value="1983">1983</option>
                                            <option value="1984">1984</option>
                                            <option value="1985">1985</option>
                                            <option value="1986">1986</option>
                                            <option value="1987">1987</option>
                                            <option value="1988">1988</option>
                                            <option value="1989">1989</option>
                                            <option value="1990">1990</option>
                                            <option value="1991">1991</option>
                                            <option value="1992">1992</option>
                                            <option value="1993">1993</option>
                                            <option value="1994">1994</option>
                                            <option value="1995">1995</option>
                                            <option value="1996">1996</option>
                                            <option value="1997">1997</option>
                                            <option value="1998">1998</option>
                                            <option value="1999">1999</option>
                                            <option value="2000">2000</option>
                                            <option value="2001">2001</option>
                                            <option value="2002">2002</option>
                                            <option value="2003">2003</option>
                                            <option value="2004">2004</option>
                                            <option value="2005">2005</option>
                                            <option value="2006">2006</option>
                                            <option value="2007">2007</option>
                                            <option value="2008">2008</option>
                                            <option value="2009">2009</option>
                                            <option value="2010">2010</option>
                                            <option value="2011">2011</option>
                                            <option value="2012">2012</option>
                                            <option value="2013">2013</option>
                                            <option value="2014">2014</option>
                                            <option value="2015">2015</option>
                                            <option value="2016">2016</option>
                                            <option value="2017">2017</option>
                                            <option value="2018">2018</option>
                                            <option value="2019">2019</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                        </select>

                                    </div>
                                </Grid>
                                {/* gender */}
                                <Grid item xs={12} md={6} >
                                    <div className='register-field-container' >
                                        <p>
                                            gender
                                        </p>
                                        <select id="gender" name="gender">
                                            <option value=""></option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <div className='register-field-container' >
                                        <p>
                                            Language
                                        </p>
                                        <select id="language" name="language">
                                            <option></option>
                                            <option value="arabic">Arabic</option>
                                            <option value="english">English</option>

                                        </select>
                                    </div>
                                </Grid>
                                {/* country and state row */}
                                <Grid item xs={12} md={6} >
                                    <div className='register-field-container' >
                                        <p>
                                            Country
                                        </p>
                                        <select id="country" name="country">
                                            <option></option>
                                            <option value="dubai">dubai</option>

                                        </select>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <div className='register-field-container' >
                                        <p>
                                            State
                                        </p>
                                        <select id="country" name="country">
                                            <option value=""></option>

                                        </select>
                                    </div>
                                </Grid>
                                {/* mobile number row */}
                                <Grid item xs={12} md={12} >
                                    <div className='register-field-container' >
                                        <p>
                                            mobile number
                                        </p>
                                        <PhoneInput

                                            value={phoneNumber}
                                            onChange={setPhoneNumber} className="PhoneInputInput" />
                                    </div>
                                </Grid>
                                {/* address bar */}
                                <Grid item xs={12}  >
                                    <div className='register-field-container' >
                                        <p>
                                            Address
                                        </p>
                                        <input type='text' />
                                    </div>
                                </Grid>
                                {/* password and confirm password bar */}
                                <Grid item xs={12} md={6} >
                                    <div className='register-field-container' >
                                        <p>
                                            password
                                        </p>
                                        <input type='password' />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <div className='register-field-container' >
                                        <p>
                                            confirm password
                                        </p>
                                        <input type='password' />
                                    </div>
                                </Grid>
                                {/* select interest bar */}
                                <Grid item xs={12}  >
                                    <div className='register-field-container'>
                                        <p>
                                            add your educatioin
                                        </p>
                                        <select id="education" name="education"   >
                                            <option></option>

                                        </select>
                                    </div>
                                </Grid>
                                <Grid item xs={12}  >
                                    <div className='register-field-container'>
                                        <p>
                                            what subject are you Expert in?
                                        </p>
                                        <select id="subject" name="subject"   >
                                            <option></option>

                                        </select>
                                    </div>
                                </Grid>
                                <Grid item xs={12}  >
                                    <div className='register-field-container'>
                                        <p>
                                            Add your Experience
                                        </p>
                                        <select id="experience" name="experience"  >
                                            <option></option>

                                        </select>
                                    </div>
                                </Grid>

                                {/* register btn */}
                                <Grid item xs={12} >
                                    <div className='register-register-btn-container' >
                                        <Link to='certificates' className='register-register-btn-tutor'  >
                                            save & continue
                                        </Link>
                                    </div>
                                </Grid>

                            </Grid>
                        </div>




                    </div>
                </div>

                {/* ************* F O O T E R **************** */}

                <div style={{ marginTop: '-80px' }} >
                    <TutorFooter />
                </div>



            </div>

        </>
    )
}

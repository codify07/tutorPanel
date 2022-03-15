import React, { useState } from 'react'
import './myWallet.css'
import { Grid, Dialog, IconButton } from '@mui/material'
import walletPic from '../../../assets/wallet2.png'
import widthdrawIcon from '../../../assets/totalWidthdraw.png'
import totalEarningIcon from '../../../assets/totalEarning.png'
import { BankCard } from '../../../components/tutorPanelComponents/cards/cards'
import { WithdrawalMoneyCard } from '../../../components/tutorPanelComponents/cards/cards'
import { WithDrawHistoryTable, WalletEarnongHistoryTable } from '../../../components/tutorPanelComponents/tables/tables'
import CloseIcon from '@mui/icons-material/Close';
import { AddMoneyDialog } from '../../../components/tutorPanelComponents/dialogs/tutorDialogs'



export const MyWallet = () => {

    const [isAddMoneyOpen, setIsAddMoneyOpen] = useState(false)

    const handleAddMoneyClose = () => {
        setIsAddMoneyOpen(false)
    }
    return (
        <>

            <div className='tutor-my-wallet-page-container-' >

                {/*  */}

                <Grid container spacing={2} >
                    <Grid item xs={12} md={6} lg={4} >
                        <div className='tutor-my-wallet-page-header-card-container-' >
                            <div className='tutor-my-wallet-page-header-card-main-content-wraper' >
                                <div>
                                    <img src={walletPic} alt="" />
                                </div>
                                <div className='tutor-my-wallet-page-header-card-text-container' >
                                    <h2> Wallet Balance </h2>
                                    <p> $65,000 </p>

                                </div>
                            </div>
                            <div className='tutor-my-wallet-page-header-card-add-money-btn-cont-' >
                                <button onClick={() => {
                                    setIsAddMoneyOpen(true)
                                }} >
                                    Add money
                                </button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} >
                        <div className='tutor-my-wallet-page-header-card-te-container-' >
                            <div className='tutor-my-wallet-page-header-card-te-main-content-wraper' >
                                <div>
                                    <img src={totalEarningIcon} alt="pic" />
                                </div>
                                <div className='tutor-my-wallet-page-header-card-te-text-container' >
                                    <h2> Total Earnings </h2>
                                    <p> $3,65,000 </p>

                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} >
                        <div className='tutor-my-wallet-page-header-card-tw-container-' >
                            <div className='tutor-my-wallet-page-header-card-tw-main-content-wraper' >
                                <div>
                                    <img src={widthdrawIcon} alt="pic" />
                                </div>
                                <div className='tutor-my-wallet-page-header-card-tw-text-container' >
                                    <h2> Total withdrawals </h2>
                                    <p> $3,00,000 </p>

                                </div>
                            </div>
                        </div>
                    </Grid>
                    {/* bank cards */}
                    <Grid item xs={12} lg={6}  >
                        <div>
                            <BankCard />
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={6} >
                        <div>
                            <WithdrawalMoneyCard />
                        </div>
                    </Grid>

                </Grid>

                {/* tables */}

                <div style={{ marginTop: '30px' }} >
                    <WithDrawHistoryTable />
                </div>

                <div style={{ marginTop: '30px' }} >
                    <WalletEarnongHistoryTable />
                </div>

                {/* ____ dialogs ____ */}

                <Dialog open={isAddMoneyOpen} fullWidth maxWidth='sm' onClose={handleAddMoneyClose} >
                    <div style={{ paddingBottom: '40px' }} >
                        <div className='first-tutor-panel-dialog-close-btn-icon-container' >
                            <IconButton className='first-tutor-panel-dialog-close-icon' onClick={() => {
                                handleAddMoneyClose();
                            }} >
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <div>
                            <AddMoneyDialog />
                        </div>
                        <Grid item xs={12} >
                            <div className='tutor-my-wallet-add-money-dialog-submit-btn-cont--' >
                                <button type='submit' onClick={() => {
                                    handleAddMoneyClose();
                                }} >
                                    submit
                                </button>
                            </div>
                        </Grid>
                    </div>
                </Dialog>

                {/* add new card dialog */}

                <Dialog open={isAddMoneyOpen} fullWidth maxWidth='sm' onClose={handleAddMoneyClose} >
                    <div style={{ paddingBottom: '40px' }} >
                        <div className='first-tutor-panel-dialog-close-btn-icon-container' >
                            <IconButton className='first-tutor-panel-dialog-close-icon' onClick={() => {
                                handleAddMoneyClose();
                            }} >
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <div>
                            <AddMoneyDialog />
                        </div>
                        <Grid item xs={12} >
                            <div className='tutor-my-wallet-add-money-dialog-submit-btn-cont--' >
                                <button type='submit' onClick={() => {
                                    handleAddMoneyClose();
                                }} >
                                    submit
                                </button>
                            </div>
                        </Grid>
                    </div>
                </Dialog>

            </div>

        </>
    )
}
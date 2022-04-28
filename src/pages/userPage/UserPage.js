import React, { useContext, useEffect } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import Header from '../../compononents/headerUser/HeaderUser'
import UserInfo from '../../compononents/userInfo/UserInfo'
import { MainContainer, CentralContainer, SideContainer } from './styled'
import { useHistory } from "react-router-dom";
import ClosedPlansInfo from '../../compononents/closedPlansInfo/ClosedPlansInfo';
import CheckinsDone from '../../compononents/checkinsDone/CheckinsDone';
import AvailableClasses from '../../compononents/availableClasses/AvailableClasses';
import { useProtectedPageStudent } from '../../hooks/useProtectedPageStudent'


const UserPage = () => {
    useProtectedPageStudent()
    const history = useHistory()
    const { setters, states } = useContext(GlobalStateContext);
    setters.setAdmin(false)
    const user = states.currentUser

    useEffect(() => {
        // findUser(setters.setCurrentUser)
        // findAllClasses(setters.setClasses) 
    }, [states.newRender])

    return (
        <div>
            <Header history={history} />
            <MainContainer>

                <SideContainer>
                    <AvailableClasses />
                </SideContainer>

                <CentralContainer>
                    {user && user.plans && user.plans.length &&
                        <UserInfo
                            id={user.id}
                            name={user.name}
                            type={user.plans[0].type}
                            frequency={user.plans[0].frequency}
                            planStarted={user.plans[0].planStarted}
                            planEnds={user.plans[0].planEnds}
                            totalClasses={user.plans[0].totalClasses}
                            avaliableClasses={user.plans[0].avaliableClasses}
                        />}

                    <ClosedPlansInfo user={user} />
                </CentralContainer>

                <SideContainer>
                    {user && user.plans && user.plans.length && <CheckinsDone user={user} />}
                </SideContainer>
            </MainContainer>
        </div>
    )
}

export default UserPage

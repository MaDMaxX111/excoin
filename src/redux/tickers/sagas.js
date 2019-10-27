import { all, takeEvery, put, call, take, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import actions from './actions';
import ws from '../../api/binance_ws';
import wsConfig from '../../api/binance_config';

// import { getTournaments, getEvents } from '../API'
// import sseChanel from '../API/sse'
// import {
//     SUBSCRIBE_TOURNAMENTS,
//     UNSUBSCRIBE_TOURNAMENTS,
//     FETCH_TOURNAMENT_SUCCESS,
// } from '../const/actions'
//
// import {
//     EVENT_BATTLE_UPDATE,
// } from '../const/events'
//
// import { isAdmin, roleIsAllowMove, showTournamentNotificationMessage } from '../utils'
//
// import {
//     BATTLE_NOTIFICATION_MESSAGE_CONFIRM_RESULT,
//     BATTLE_NOTIFICATION_MESSAGE_CONFIRM_PROTEST,
//     BATTLE_NOTIFICATION_MESSAGE_PROTEST,
//     BATTLE_NOTIFICATION_MESSAGE_CONFIRM_INCOMPLIANCE,
//     BATTLE_NOTIFICATION_MESSAGE_INCOMPLIANCE,
//     BATTLE_NOTIFICATION_MESSAGE_REJECT_PROTEST,
//     BATTLE_NOTIFICATION_MESSAGE_FIGHT_OVER,
//     BATTLE_NOTIFICATION_MESSAGE_ADMIN_PROTEST,
//     BATTLE_NOTIFICATION_MESSAGE_ADMIN_INCOMPLIANCE,
//     BATTLE_STATE_AWAIT_CONFIRM_RESULT,
//     BATTLE_STATE_AWAIT_RESULT_BY_PROTEST,
//     BATTLE_STATE_FIGHTING,
//     BATTLE_STATE_STOPPED_BY_PROTEST,
//     BATTLE_STATE_COMPLETED,
// } from '../const/tournament'
//
let channel = null
//
function* createEventChannel(symbols) {
    return yield eventChannel(emit => {

        const callBack = (message) => {
            emit(message)
        }

        ws.subscribe(callBack, symbols, wsConfig.streams.ticker)

        return () => {
            ws.unsubscribe(callBack)
        }
    })
}

function* subscribeMiniTickers({ tickers }) {

    try {
        channel = yield call(createEventChannel, tickers)

        while (true) {

                const data = yield take(channel);

                console.log(data);
//
//                 const updateBattle = JSON.parse(data) || null
//                 if (updateBattle) {
//                     // чтоб не перегружать объемными функциями redux ищем тут туарнамент битвы и обновляем полностью туарнамент
//                     const [tournaments, userRole, clanInfo] = yield select((state) => [state.tournament.tournaments, state.user.role, state.user.clan])
//                     const {id: battleId} = updateBattle
//
//                     let updatetedTournament = null
//                     let previewBattleState = null
//
//                     if (tournaments && tournaments.length) {
//                         // ищем битву в стейте туарнаментов
//                         tournaments.some((tournament) => {
//                             const {capture, battles: rounds} = tournament
//
//                             const {id: captureId} = capture || {}
//                             if (captureId && captureId === battleId) {
//                                 previewBattleState = Object.assign({}, tournament.capture)
//                                 updatetedTournament = Object.assign({}, tournament, {capture: updateBattle})
//                                 return true
//                             }
//
//                             return rounds.some((round, indexRound) => {
//                                 return round.some((battle, indexBattle) => {
//                                     const {id: bId} = battle
//                                     if (bId && bId === battleId) {
//                                         previewBattleState = Object.assign({}, battle)
//                                         round.splice(indexBattle, 1, updateBattle)
//                                         rounds.splice(indexRound, 1, round)
//
//                                         updatetedTournament = Object.assign({}, tournament, {battles: rounds})
//
//                                         return true
//                                     }
//                                     return false
//                                 })
//                             })
//
//                         })
//                     }
//
//                     // обновляем редукс
//                     if (updatetedTournament) {
//
//                         // обновляем стейт туарнаментов
//                         yield put({
//                             type: FETCH_TOURNAMENT_SUCCESS,
//                             payload: updatetedTournament,
//                         })
//
//
//                         // показываем сообщение
//                         let typeMessage = null;
//
//                         const {id: clanId} = clanInfo || {}
//
//                         const {
//                             object,
//                             state: currentState,
//                             winner_candidate: currentWinnerCandidate,
//                             clan_protesting: clanProtestingId,
//                             clan_1,
//                             clan_2,
//                         } = updateBattle
//
//                         const {state: previewState,} = previewBattleState
//
//                         // для командиров клана и смотрим чтоб клан участвовал в битве
//                         if (roleIsAllowMove(userRole) && (clan_1 === clanId || clan_2 === clanId)) {
//
//                             // кто то нажал кнопку победа, cопернику показываем уведомление
//                             // “Соперник победил в бою. Нажмите “Подтвердить”, если вы согласны. Нажмите “Опротестовать”, если вы не согласны. У вас 5 минут для выбора”.
//                             if (currentState !== previewState
//                                 && currentState === BATTLE_STATE_AWAIT_CONFIRM_RESULT
//                                 && currentWinnerCandidate !== clanId) {
//
//                                 typeMessage = BATTLE_NOTIFICATION_MESSAGE_CONFIRM_RESULT
//
//                                 // “Вы заявили о несогласии с результатами боя. Ожидайте решение судьи”.
//                             } else if (currentState !== previewState
//                                 && previewState === BATTLE_STATE_AWAIT_CONFIRM_RESULT
//                                 && currentState === BATTLE_STATE_AWAIT_RESULT_BY_PROTEST
//                                 && clanProtestingId === clanId) {
//
//                                 typeMessage = BATTLE_NOTIFICATION_MESSAGE_CONFIRM_INCOMPLIANCE
//
//                                 // “Соперник заявил о несогласии с результатами боя. Ожидайте решение судьи”.
//                             } else if (currentState !== previewState
//                                 && previewState === BATTLE_STATE_AWAIT_CONFIRM_RESULT
//                                 && currentState === BATTLE_STATE_AWAIT_RESULT_BY_PROTEST
//                                 && clanProtestingId !== clanId) {
//
//                                 typeMessage = BATTLE_NOTIFICATION_MESSAGE_INCOMPLIANCE
//
//                                 // “Вы заявили о нарушении соперником правил ивента. Время раунда остановлено. Ожидайте решение судьи”.
//                             } else if (currentState !== previewState
//                                 && previewState === BATTLE_STATE_FIGHTING
//                                 && currentState === BATTLE_STATE_STOPPED_BY_PROTEST
//                                 && clanProtestingId === clanId) {
//
//                                 typeMessage = BATTLE_NOTIFICATION_MESSAGE_CONFIRM_PROTEST
//
//                                 // “Соперник заявил протест. Время раунда остановлено. Ожидайте решение судьи”.
//                             } else if (currentState !== previewState
//                                 && previewState === BATTLE_STATE_FIGHTING
//                                 && currentState === BATTLE_STATE_STOPPED_BY_PROTEST
//                                 && clanProtestingId !== clanId) {
//
//                                 typeMessage = BATTLE_NOTIFICATION_MESSAGE_PROTEST
//
//                                 // “Судья отклонил протест. Продолжайте бой”
//                             } else if (currentState !== previewState
//                                 && previewState === BATTLE_STATE_STOPPED_BY_PROTEST
//                                 && currentState === BATTLE_STATE_FIGHTING) {
//
//                                 typeMessage = BATTLE_NOTIFICATION_MESSAGE_REJECT_PROTEST
//
//                                 // “Судья вынес решение. Бой завершен”.
//                             } else if (currentState !== previewState
//                                 && (previewState === BATTLE_STATE_STOPPED_BY_PROTEST || previewState === BATTLE_STATE_AWAIT_RESULT_BY_PROTEST)
//                                 && currentState === BATTLE_STATE_COMPLETED) {
//
//                                 typeMessage = BATTLE_NOTIFICATION_MESSAGE_FIGHT_OVER
//
//                             }
//
//                         }
//
//                         if (isAdmin(userRole)) {
//
//                             // “Клан 1 заявил о несогласии с результатами боя на объекте А4 (пара №6)”.
//                             if (currentState !== previewState
//                                 && previewState === BATTLE_STATE_AWAIT_CONFIRM_RESULT
//                                 && currentState === BATTLE_STATE_AWAIT_RESULT_BY_PROTEST) {
//
//                                 typeMessage = BATTLE_NOTIFICATION_MESSAGE_ADMIN_INCOMPLIANCE
//
//                                 // “Клан 1 заявил протест до начала боя на объекте А4 (пара №6)”
//                             } else if (currentState !== previewState
//                                 && previewState === BATTLE_STATE_FIGHTING
//                                 && currentState === BATTLE_STATE_STOPPED_BY_PROTEST) {
//
//                                 typeMessage = BATTLE_NOTIFICATION_MESSAGE_ADMIN_PROTEST
//
//                             }
//                         }
//
//                         if (typeMessage) {
//                             showTournamentNotificationMessage({typeMessage, object, battle: updateBattle})
//                         }
//
                    }
//
//                 }
//             }
//         }
//
    } catch (e) {
        console.log(e)
    }
}
//
// function* unSubscribeTournamentSaga() {
//     try {
//         yield channel.close()
//     } catch (e) {
//         console.log(e)
//     }
// }

export default function* rootSaga() {
    yield all([
        takeEvery(actions.SUBSCRIBE_MINI_TICKERS, subscribeMiniTickers),
        // takeEvery(UNSUBSCRIBE_TOURNAMENTS, unSubscribeTournamentSaga),
    ])
}

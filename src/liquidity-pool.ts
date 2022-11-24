import {
  Deposit as DepositEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Pool as PoolEvent,
  Withdraw as WithdrawEvent
} from "../generated/LiquidityPool/LiquidityPool"
import {
  Deposit,
  OwnershipTransferred,
  Pool,
  Withdraw
} from "../generated/schema"

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._from = event.params._from
  entity._valueRewardToken = event.params._valueRewardToken
  entity._valueLiquidityToken = event.params._valueLiquidityToken
  entity._pool = event.params._pool

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePool(event: PoolEvent): void {
  let entity = new Pool(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenAAdress = event.params._tokenAAdress
  entity._tokenBAdress = event.params._tokenBAdress
  entity.price = event.params.price
  entity._poolAdress = event.params._poolAdress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._to = event.params._to
  entity._valueRewardToken = event.params._valueRewardToken
  entity._valueLiquidityToken = event.params._valueLiquidityToken
  entity._pool = event.params._pool

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

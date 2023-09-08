import styled from 'styled-components'
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import Toptext from '@/components/Toptext/TopText'

const StaffRegister = () => {
  return (
    <div>
      <Toptext date={false} text='スタッフ新規登録' variant='title' />
      <TextFormContiner>
        <div>
          <Input label='*名前' placeholder='名前を入力（必須）' variant='textInput' />
        </div>
        <div>
          <Input label='*時給' placeholder='時給を入力（必須）　*半角数字' variant='textInput' />
        </div>
        <div>
          <Input label='交通費' placeholder='往復交通費を入力　*半角数字' variant='textInput' />
        </div>
        <div>
          <Input label='勤務可能日' placeholder='電話番号を入力　*半角数字' variant='textInput' />
        </div>
        <div className='textarea-form'>
          <Input label='メモ' placeholder='memo' variant='memoTextarea' />
        </div>
        <div className='button-container'>
          <Button label='登録' variant='register' size='medium' />
        </div>
      </TextFormContiner>
    </div>
  )
}

export default StaffRegister

const TextFormContiner = styled.div`
  margin: 4vh 0 0 0;
  div {
    margin-bottom: 2vh;
  }
  .textarea-form {
    margin-top: 5vh;
  }
  .button-container {
    text-align: right;
    margin-right: 12vw;
    margin-top: 4vh;
  }
`

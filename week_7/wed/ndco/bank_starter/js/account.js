// $(document).ready(function(){
    console.log('loaded')

    class Account {
        constructor (balance=0) {
            this.balance = balance;
        }

        toDeposit (num) {
            this.balance += num;
        }

        toWithdraw (num) {
            this.balance -= num;
            if (this.balance < 0) {
                console.log('you cant withdraw');
                this.balance += num;
            }
        }

    }
    
    let andy = new Account();
    
// })
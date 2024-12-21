const text=document.getElementById('text')
const tasks=document.getElementById('tasks')
const btn=document.getElementById('btn')
btn.addEventListener('click', function(){
	// creat child inside section
	const div = document.createElement('div')
	div.className='div'
    tasks.appendChild(div)
    const task=document.createElement('p')
	task.className = 'task';
	const list=div.appendChild(task)

	list.textContent=text.value
	text.value=""

	list.addEventListener('click',function(){
		list.style.textDecoration='line-through'
	})

	// creat btn inside section
	const btnRemove=document.createElement('button')
    btnRemove.className='btn-remove'
	btnRemove.textContent ='remove'

   div.appendChild(btnRemove)
    btnRemove.addEventListener('click',function(){
		const userResponse = confirm('Do you want to remove?');

		if(userResponse){
			div.remove()

		}else{
			console.log('so')
		}
	})
	
});
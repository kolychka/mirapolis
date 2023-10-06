window.onload = function() {
    const branches = document.querySelectorAll('.tree_branch');

    function onclickToggleBranch(event) {
        event.preventDefault();
        event.stopPropagation();

        if (event.currentTarget.classList.contains('tree_branch__blocked')) return;

        const branch = event.currentTarget.querySelector('.tree');
        const branchHead = branch.parentNode;

        branchHead.classList.toggle('tree_branch__closed');
    }

    branches.forEach(branch => branch.addEventListener('click', onclickToggleBranch));
}
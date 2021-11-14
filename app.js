async function getBudgets(db) {
    const budgetCol = collection(db, "Budgets");
    const budgetSnapshot = await getDocs(budgetCol);
    const budgetList = budgetSnapshot.docs.map((doc) => doc.data());
    return budgetList;
}
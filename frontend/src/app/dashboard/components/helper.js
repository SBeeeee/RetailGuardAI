export const searchTransactions = (transactions, query) => {
    if (!query) return transactions;
    return transactions.filter((txn) =>
      txn.userId.toLowerCase().includes(query.toLowerCase()) ||
      txn.merchant.toLowerCase().includes(query.toLowerCase()) ||
      txn.category.toLowerCase().includes(query.toLowerCase())
    );
  };
  
  export const filterByStatus = (transactions, status) => {
    if (!status || status === "All") return transactions;
    return transactions.filter((txn) => txn.status === status.toLowerCase());
  };
  
  
  export const filterByRiskLevel = (transactions, level) => {
    switch (level) {
      case "High":
        return transactions.filter((txn) => txn.fraudScore > 80);
      case "Medium":
        return transactions.filter((txn) => txn.fraudScore > 50 && txn.fraudScore <= 80);
      case "Low":
        return transactions.filter((txn) => txn.fraudScore <= 50);
      default:
        return transactions;
    }
  };
  

  export const paginateTransactions = (transactions, page, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return transactions.slice(startIndex, endIndex);
  };
  
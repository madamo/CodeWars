/* Description 

  For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

  The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.
*/

/* Solution */

class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
    this.collection = collection
    this.itemsPerPage = itemsPerPage
	}
	itemCount() {
	// returns the number of items within the entire collection
    return this.collection.length
	}
	pageCount() {
	// returns the number of pages
    //console.log(Math.ceil(this.itemCount() / this.itemsPerPage))
    return Math.ceil(this.itemCount() / this.itemsPerPage)
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
    if (pageIndex > this.pageCount()-1 || pageIndex < 0) {
      return -1
    } else if (pageIndex === this.pageCount()-1) {
      if (this.itemCount() % this.itemsPerPage === 0) {
        return this.itemsPerPage
      } else {
        return this.itemCount() % this.itemsPerPage
      }
    } else {
      return this.itemsPerPage
    }
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
    if (itemIndex > this.collection.length-1 || itemIndex < 0) {
      return -1
    } else if (itemIndex === 0 && this.collection.length === 0) {
      return -1
    } else if (itemIndex === 0) {
      return 0
    } else {
      return Math.floor(itemIndex / this.itemsPerPage)
    }
	}
}
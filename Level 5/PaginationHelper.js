/* Description */

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
    if (pageIndex >= this.pageCount() || pageIndex < 0) {
      console.log('number of pages', this.pageCount())
      console.log('index out of range')
      return -1
    } else if (pageIndex === this.pageCount()-1) {
      console.log('last page')
      if (this.itemCount() % this.itesmPerPage === 0) {
        return this.itemsPerPage()
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
    if (itemIndex > this.collection.length || itemIndex < 0) {
      return -1
    } else if (itemIndex === 0 && this.collection.length === 0) {
      return -1
    } else if (itemIndex === 0) {
      return 0
    } else {
      return Math.round(itemIndex / this.itemsPerPage)
    }
	}
}
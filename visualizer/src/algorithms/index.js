import { mergeSortHelper } from './merge_sort/merge_sort';
import { quickSortHelper } from './quick_sort/quick_sort';
import { insertionSortHelper } from './insertion_sort/insertion_sort';
import { selectionSortHelper } from './selection_sort/selection_sort';
import { bubbleSortHelper } from './bubble_sort/bubble_sort';

export default { 
	merge_sort: mergeSortHelper,
	quick_sort: quickSortHelper,
	insertion_sort: insertionSortHelper,
	selection_sort: selectionSortHelper,
	bubble_sort: bubbleSortHelper
}
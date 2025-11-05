<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class AABBTree


# class AABBTree


# class AABBTree


# class AABBTree


## Functions

### AABBTree

```cpp
public void AABBTree<dimension>(const AABBTree<dimension> & )
```


### operator=

```cpp
public AABBTree<dimension> & operator=(const AABBTree<dimension> & )
```


### AABBTree

```cpp
public void AABBTree<dimension>()
```




**brief** AABB is a search tree for fast spatial request using the bounding box organisation of elements stored in a single container.

**bboxes** container containing elements bounding boxes. Each element can then be accessed using the index of its box in the tree which should match the index in its initial container.

### AABBTree

```cpp
public void AABBTree<dimension>(absl::Span<const BoundingBox<dimension> > bboxes)
```


### AABBTree

```cpp
public void AABBTree<dimension>(AABBTree<dimension> && other)
```


### ~AABBTree

```cpp
public void ~AABBTree<dimension>()
```


### operator=

```cpp
public AABBTree<dimension> & operator=(AABBTree<dimension> && other)
```


### nb_bboxes

```cpp
public index_t nb_bboxes()
```




**brief** Gets the number of boxes in the lower level of the aabb tree.

**note** This value should match the initial size of the container that store all objects to organize the the aabb tree.

### bounding_box

```cpp
public const BoundingBox<dimension> & bounding_box()
```


### parallel

```cpp
public bool parallel()
```




**brief** Whether or not the queries run on this tree are parallelized.

### set_parallel

```cpp
public void set_parallel(bool parallel)
```




**brief** Sets whether or not the queries run on this tree are parallelized.

### containing_boxes

```cpp
public vector containing_boxes(const Point<dimension> & query)
```




**brief** Gets all the boxes containing a point

**query** [in] the point to test

### closest_element_box

```cpp
public tuple closest_element_box(const Point<dimension> & query, const EvalDistance & action)
```




**brief** Gets the closest element to a point

**query** [in] the point to test

**action** [in] the functor to compute the distance between the **p**  and the tree element in boxes

**return** a tuple containing: - the index of the closest element/box. - the nearest point on the element in box. - the distance between the **p**  and **p** 



**EvalDistance** this functor should have an operator() defined like this: double operator()( const Point< dimension >& query, index_t curent_element_box ) const ; the output is the distance between the point **p**  and the element stored in the**p** 



**note** if several elements box match the distance computation, then one of them will be randomly returned.

### compute_bbox_element_bbox_intersections

```cpp
public void compute_bbox_element_bbox_intersections(const BoundingBox<dimension> & box, EvalIntersection & action)
```




**brief** Computes the intersections between a given box and the all element boxes.

**box** [in] the box to test

**action** [in] The functor to run when an element box intersects**p** 



**EvalIntersection** this functor should have an operator() defined like this: bool operator()( index_t cur_element_box ) ;

**note** The returned boolean indicates if the search should stop or continue. Return true to stop the search, false to continue.

**note** the operator define what to do with the box **p**  if it is intersected by the **p** 

### compute_self_element_bbox_intersections

```cpp
public void compute_self_element_bbox_intersections(EvalIntersection & action)
```




**brief** Computes the self intersections of the element boxes.

**action** [in] The functor to run when two boxes intersect

**EvalIntersection** this functor should have an operator() defined like this: bool operator()( index_t cur_element_box1, index_t cur_element_box2 );

**note** cur_element_box1 and cur_element_box2 are the element box indices that intersect.

**note** the operator defines what to do when two boxes of the tree ( **p**  and **p**  ) intersect each other (for example: test real intersection between each element in boxes and store the result.)

**note** The returned boolean indicates if the search should stop or continue. Return true to stop the search, false to continue.

### compute_other_element_bbox_intersections

```cpp
public void compute_other_element_bbox_intersections(const AABBTree<dimension> & other_tree, EvalIntersection & action)
```




**brief** Computes all the intersections of the element boxes between this tree and another one.

**action** [in] The functor to run when two boxes intersect

**EvalIntersection** this functor should have an operator() defined like this: bool operator()( index_t cur_element_box1, index_t cur_element_box2 );

**note** cur_element_box1 and cur_element_box2 are the element box indices that intersect in the current tree and in the other tree.

**note** The returned boolean indicates if the search should stop or continue. Return true to stop the search, false to continue.

### compute_ray_element_bbox_intersections

```cpp
public void compute_ray_element_bbox_intersections(const Ray<dimension> & ray, EvalIntersection & action)
```




**brief** Computes the intersections between a given ray and all element boxes.

**ray** [in] The ray to test.

**action** [in] The functor to run when a box is intersected by the ray.

**EvalIntersection** this functor should have an operator() defined like this: bool operator()( index_t cur_element_box ) ;

**note** the operator define what to do with the box **p**  if it is intersected by the **p** 

**note** The returned boolean indicates if the search should stop or continue. Return true to stop the search, false to continue.

### compute_line_element_bbox_intersections

```cpp
public void compute_line_element_bbox_intersections(const InfiniteLine<dimension> & line, EvalIntersection & action)
```




**brief** Computes the intersections between a given infinite line and all element boxes.

**line** [in] The line to test.

**action** [in] The functor to run when a box is intersected by the line.

**EvalIntersection** this functor should have an operator() defined like this: bool operator()( index_t cur_element_box ) ;

**note** the operator define what to do with the box **p**  if it is intersected by the **p** 

**note** The returned boolean indicates if the search should stop or continue. Return true to stop the search, false to continue.

### compute_generic_element_bbox_intersections

```cpp
public void compute_generic_element_bbox_intersections(const EvalBox & box_filter, EvalIntersection & action)
```




**brief** Computes the intersections between any object (for which intersection against an arbitrary axis-aligned bounding box can be detected efficiently) and all element boxes.

**box_filter** [in] The functor to run to determine whether a box is intersected by the searched object or not. The box may correspond either to an internal tree node or to a tree element.

**action** [in] The functor to run when a tree element box is intersected by the search object.

**EvalBox** this functor should have an operator() defined like this: bool operator( const BoundingBox<dimension> & ) ;

**EvalIntersection** this functor should have an operator() defined like this: bool operator()( index_t cur_element_box ) ;

**note** the operator define what to do with the box **p**  if it is intersected by the searched object.

**note** The returned boolean indicates if the search should stop or continue. Return true to stop the search, false to continue.

### compute_segment_element_bbox_intersections

```cpp
public void compute_segment_element_bbox_intersections(const Segment<dimension> & segment, EvalIntersection & action)
```




**brief** Computes the intersections between a given Segment and all element boxes.

**segment** [in] The segment to test.

**action** [in] The functor to run when a box is intersected by the segment.

**EvalIntersection** this functor should have an operator() defined like this: bool operator()( index_t cur_element_box ) ;

**note** the operator define what to do with the box **p**  if it is intersected by the **p** 

**note** The returned boolean indicates if the search should stop or continue. Return true to stop the search, false to continue.

### compute_triangle_element_bbox_intersections

```cpp
public void compute_triangle_element_bbox_intersections(const Triangle<dimension> & triangle, EvalIntersection & action)
```




**brief** Computes the intersections between a given Triangle and all element boxes.

**triangle** [in] The triangle to test.

**action** [in] The functor to run when a box is intersected by the segment.

**EvalIntersection** this functor should have an operator() defined like this: bool operator()( index_t cur_element_box ) ;

**note** the operator define what to do with the box **p**  if it is intersected by the **p** 

**note** The returned boolean indicates if the search should stop or continue. Return true to stop the search, false to continue.




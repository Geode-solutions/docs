# struct Element


## Members

```cpp
```cpp
```cpp
```cpp
public std::array<Point<dimension>, nb_points> uvw
```
```
```
```

```cpp
```cpp
```cpp
```cpp
public std::array<Point3D, nb_points> xyz
```
```
```
```

```cpp
```cpp
```cpp
```cpp
public std::array<index_t, nb_points> containing_element
```
```
```
```

```cpp
```cpp
```cpp
```cpp
public BoundingBox<dimension> bbox
```
```
```
```

```cpp
```cpp
```cpp
```cpp
public int visited
```
```
```
```



## Functions

### Element

```cpp
```cpp
```cpp
```cpp
public void Element<dimension>(const Point<dimension> & center)
```
```
```
```


### is_complete

```cpp
```cpp
```cpp
```cpp
public _Bool is_complete()
```
```
```
```


### done

```cpp
```cpp
```cpp
```cpp
public _Bool done(local_index_t v)
```
```
```
```


### is_visited

```cpp
```cpp
```cpp
```cpp
public _Bool is_visited(index_t element)
```
```
```
```





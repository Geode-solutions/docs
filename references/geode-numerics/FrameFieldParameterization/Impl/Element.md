# struct Element


## Members

```cpp
public std::array<Point<dimension>, nb_points> uvw
```

```cpp
public std::array<Point3D, nb_points> xyz
```

```cpp
public std::array<index_t, nb_points> containing_element
```

```cpp
public BoundingBox<dimension> bbox
```

```cpp
public int visited
```



## Functions

### Element

```cpp
public void Element<dimension>(const Point<dimension> & center)
```


### is_complete

```cpp
public _Bool is_complete()
```


### done

```cpp
public _Bool done(local_index_t v)
```


### is_visited

```cpp
public _Bool is_visited(index_t element)
```





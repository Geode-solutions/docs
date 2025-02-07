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

# class RegularGridBuilder


```cpp
Inherits from SurfaceMeshBuilder<2>, GridBuilder<2>
```



## Functions

### RegularGridBuilder

```cpp
public void RegularGridBuilder(RegularGridBuilder<2> && )
```


### create

```cpp
public unique_ptr create(RegularGrid2D & grid)
```


### initialize_grid

```cpp
public void initialize_grid(const Point2D & origin, array cells_number, array cells_length)
```


### initialize_grid

```cpp
public void initialize_grid(const Point2D & origin, array cells_number, double cells_length)
```


### initialize_grid

```cpp
public void initialize_grid(Point origin, array cells_number, array cell_directions)
```


### update_origin

```cpp
public void update_origin(const Point2D & origin)
```

### update_origin_and_directions

```cpp
public void update_origin_and_directions(Point origin, array cell_directions)
```

### copy

```cpp
public void copy(const RegularGrid2D & grid)
```


### RegularGridBuilder

```cpp
protected void RegularGridBuilder(RegularGrid2D & grid)
```




# class RegularGridBuilder

# class RegularGridBuilder


```cpp
Inherits from SolidMeshBuilder<3>, GridBuilder<3>
```



## Functions

### RegularGridBuilder

```cpp
public void RegularGridBuilder(RegularGridBuilder<3> && )
```


### create

```cpp
public unique_ptr create(RegularGrid3D & grid)
```


### initialize_grid

```cpp
public void initialize_grid(const Point3D & origin, array cells_number, array cells_length)
```


### initialize_grid

```cpp
public void initialize_grid(const Point3D & origin, array cells_number, double cells_length)
```


### initialize_grid

```cpp
public void initialize_grid(Point origin, array cells_number, array cell_directions)
```


### update_origin

```cpp
public void update_origin(const Point3D & origin)
```

### update_origin_and_directions

```cpp
public void update_origin_and_directions(Point origin, array cell_directions)
```

### copy

```cpp
public void copy(const RegularGrid3D & grid)
```


### RegularGridBuilder

```cpp
protected void RegularGridBuilder(RegularGrid3D & grid)
```





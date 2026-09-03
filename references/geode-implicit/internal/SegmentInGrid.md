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

# struct SegmentInGrid


## Members

```cpp
public array cell

```

```cpp
public Point p0_in_grid

```

```cpp
public Point p1_in_grid

```



# struct SegmentInGrid


## Members

```cpp
public array cell

```

```cpp
public Point p0_in_grid

```

```cpp
public Point p1_in_grid

```



# struct SegmentInGrid


## Members

```cpp
public typename ComputationGrid<dimension>::CellIndices cell

```

```cpp
public Point<dimension> p0_in_grid

```

```cpp
public Point<dimension> p1_in_grid

```



## Functions

### SegmentInGrid

```cpp
public void SegmentInGrid<dimension>(typename ComputationGrid<dimension>::CellIndices cell_in, Point<dimension> p0_in_grid_in, Point<dimension> p1_in_grid_in)
```





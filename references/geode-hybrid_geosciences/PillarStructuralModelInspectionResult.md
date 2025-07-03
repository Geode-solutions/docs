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

# struct PillarStructuralModelInspectionResult


## Members

```cpp
public PointsOutsideTopographyInspectionResult points_outside

```

```cpp
public MultiZInspectionResult multi_z_surfaces

```

```cpp
public LinesInspectionResult not_crossing_lines

```



## Functions

### PillarStructuralModelInspectionResult

```cpp
public void PillarStructuralModelInspectionResult()
```


### string

```cpp
public basic_string string()
```


### operator bool

```cpp
public bool operator bool()
```





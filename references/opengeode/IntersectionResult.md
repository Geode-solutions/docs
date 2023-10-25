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

# struct IntersectionResult


## Members

```cpp
public absl::optional<Intersection> result

```

```cpp
public IntersectionType type

```

```cpp
public absl::optional<CorrectnessInfo<Intersection> > correctness

```



## Functions

### IntersectionResult

```cpp
public void IntersectionResult<Intersection>(Intersection intersection, CorrectnessInfo<Intersection> correctness_info)
```


### IntersectionResult

```cpp
public void IntersectionResult<Intersection>(IntersectionType intersection_type)
```


### has_intersection

```cpp
public bool has_intersection()
```


### operator bool

```cpp
public bool operator bool()
```





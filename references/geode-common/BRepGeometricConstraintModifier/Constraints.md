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

# struct Constraints


## Members

```cpp
public BORDER_CONSTRAINT border

```

```cpp
public flat_hash_map block_constraints

```



## Functions

### Constraints

```cpp
public void Constraints(BORDER_CONSTRAINT border_constraint)
```


### Constraints

```cpp
public void Constraints(Constraints && )
```


### operator=

```cpp
public Constraints & operator=(Constraints && )
```


### ~Constraints

```cpp
public void ~Constraints()
```


### constraints

```cpp
public BlockConstraints & constraints(const Block3D & block)
```


### constraints

```cpp
public const BlockConstraints & constraints(const Block3D & block)
```





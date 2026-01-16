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


```cpp
Inherits from CommonConstraints
```



## Members

```cpp
public ForbiddenFacets forbidden_facets

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


### add_constraints

```cpp
public void add_constraints(const Constraints & constraints)
```





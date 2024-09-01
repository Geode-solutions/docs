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

# class Cylinder


## Functions

### Cylinder

```cpp
public void Cylinder(Segment axis, double radius)
```


### Cylinder

```cpp
public void Cylinder(const Cylinder & other)
```


### operator=

```cpp
public Cylinder & operator=(const Cylinder & other)
```


### Cylinder

```cpp
public void Cylinder(Cylinder && other)
```


### operator=

```cpp
public Cylinder & operator=(Cylinder && other)
```


### axis

```cpp
public const Segment3D & axis()
```


### radius

```cpp
public double radius()
```





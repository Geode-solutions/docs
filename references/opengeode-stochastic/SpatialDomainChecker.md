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

# struct SpatialDomainChecker


## Functions

### is_anchored_in_domain

```cpp
public bool is_anchored_in_domain(const SpatialDomain<ObjectType::dim> & domain, const ObjectType & obj)
```


### intersects_domain

```cpp
public bool intersects_domain(const SpatialDomain<ObjectType::dim> & domain, const ObjectType & obj)
```




# struct SpatialDomainChecker


## Functions

### is_anchored_in_domain

```cpp
public bool is_anchored_in_domain(const SpatialDomain<2> & domain, const OwnerSegment2D & seg)
```


### intersects_domain

```cpp
public bool intersects_domain(const SpatialDomain<2> & domain, const OwnerSegment2D & seg)
```





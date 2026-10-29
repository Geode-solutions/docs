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

# class ExternalTimeSeries


 Time series computed outside of a BRep (e.g. by a simulator), stored apart from the model and written on it on demand. Values are stored as vertex attributes of two point sets: the simulation unique vertices (one point per colocated position) and the simulation cell barycenters. They are matched geometrically with the Block vertices and polyhedra of a BRep when applied. Time series are expected to be created as time step attributes (see AttributeManager::create_time_step_attribute), but any transferable attribute is stored and applied the same way. The native file can be loaded onto a BRep with load_brep_time_series.



## Functions

### ExternalTimeSeries

```cpp
public void ExternalTimeSeries(const ExternalTimeSeries & )
```


### operator=

```cpp
public ExternalTimeSeries & operator=(const ExternalTimeSeries & )
```


### native_extension_static

```cpp
public static std::string_view native_extension_static()
```


### native_extension

```cpp
public std::string_view native_extension()
```


### ExternalTimeSeries

```cpp
public void ExternalTimeSeries()
```


### ExternalTimeSeries

```cpp
public void ExternalTimeSeries(ExternalTimeSeries && other)
```


### operator=

```cpp
public ExternalTimeSeries & operator=(ExternalTimeSeries && other)
```


### ~ExternalTimeSeries

```cpp
public void ~ExternalTimeSeries()
```


### set_unique_vertices

```cpp
public void set_unique_vertices(std::unique_ptr<PointSet3D> vertices)
```


 Set the simulation unique vertices, carrying the vertex values as vertex attributes

**exception**if the point set is null

### set_cell_barycenters

```cpp
public void set_cell_barycenters(std::unique_ptr<PointSet3D> barycenters)
```


 Set the simulation cell barycenters, carrying the cell values as vertex attributes

**exception**if the point set is null

### apply_to

```cpp
public void apply_to(BRep & model)
```


 Write the transferable attributes on the Block meshes of the model: each unique vertex on the closest model unique vertex (on all its Block vertices), each cell barycenter on the Block polyhedron with the closest barycenter. Block elements matched with no point keep no value, Blocks matched with no point are left untouched. Attribute ids and properties (time steps included) are kept. A Block time step with the same name and time as an applied one is replaced. The matching tolerance is GLOBAL_EPSILON relative to the largest absolute coordinate of the points (when larger than 1), to accept points rounded by the simulator (e.g. stored in single precision).

**exception**if a point is farther than the tolerance from its closest Block element, if several points are matched with the same Block element, or if a point is within the tolerance of several Block elements




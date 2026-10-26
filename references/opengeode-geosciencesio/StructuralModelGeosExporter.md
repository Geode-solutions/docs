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

# class StructuralModelGeosExporter


## Functions

### StructuralModelGeosExporter

```cpp
public void StructuralModelGeosExporter(const StructuralModelGeosExporter & )
```


### StructuralModelGeosExporter

```cpp
public void StructuralModelGeosExporter(StructuralModelGeosExporter && )
```


### operator=

```cpp
public StructuralModelGeosExporter & operator=(const StructuralModelGeosExporter & )
```


### operator=

```cpp
public StructuralModelGeosExporter & operator=(StructuralModelGeosExporter && )
```


### StructuralModelGeosExporter

```cpp
public void StructuralModelGeosExporter()
```


### StructuralModelGeosExporter

```cpp
public void StructuralModelGeosExporter(const StructuralModel & model, std::string_view files_directory)
```


### ~StructuralModelGeosExporter

```cpp
public void ~StructuralModelGeosExporter()
```


### add_well_perforations

```cpp
public void add_well_perforations(const PointSet3D & well_perforations, std::string_view name)
```


### set_physical_problem

```cpp
public void set_physical_problem(const PhysicalProblem & problem)
```


 Writes a full simulation deck (solvers, fluid, rock, initial conditions, events) described by the problem. Without it, only the mesh, wells and boundary conditions are written. The problem must outlive run().

### run

```cpp
public void run()
```





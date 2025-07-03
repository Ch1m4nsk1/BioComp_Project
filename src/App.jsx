import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { MapPin, BarChart3, TrendingUp, CheckCircle, XCircle, CircleCheckBig, Info, Download, FileText } from 'lucide-react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  // Dados simulados baseados na análise
  const riquezaData = {
    total: 384,
    mataAtlantica: 52,
    florestasCongo: 66,
    foraHotspots: 266
  }

  const hipoteseData = {
    nula: "Não há diferença significativa na riqueza de primatas entre hotspots e outras áreas",
    alternativa: "A riqueza de primatas é significativamente maior em hotspots de biodiversidade",
    resultado: "Não Rejeitada",
    pValor: 0.7854,
    conclusao: "A hipótese nula Não foi rejeitada (p > 0.05), logo os hotspots de biodiversidade não possuem diferença significativa entre as regiões fora dos espaço amostral."
  }

  // Dados de diversidade alfa (simulados para demonstração)
  const diversidadeAlfaData = {
    shannon: {
      mataAtlantica: 0.9839413,
      florestasCongo: 1,
      foraHotspots: 0.8173782
    },
    simpson: {
      mataAtlantica: 0.5651052,
      florestasCongo: 0.5917123,
      foraHotspots: 0.521328
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Panorama Global da Biodiversidade de Primatas
              </h1>
              <p className="text-gray-600 mt-2">
                Distribuição, riqueza e conectividade
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Script R
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Dados
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="hypothesis">Hipótese</TabsTrigger>
            <TabsTrigger value="results">Resultados</TabsTrigger>
            <TabsTrigger value="methodology">Metodologia</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Riqueza Total</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{riquezaData.total}</div>
                  <p className="text-xs text-muted-foreground">espécies de primatas</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Mata Atlântica</CardTitle>
                  <MapPin className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{riquezaData.mataAtlantica}</div>
                  <p className="text-xs text-muted-foreground">espécies ({((riquezaData.mataAtlantica/riquezaData.total)*100).toFixed(1)}%)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Florestas do Congo</CardTitle>
                  <MapPin className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">{riquezaData.florestasCongo}</div>
                  <p className="text-xs text-muted-foreground">espécies ({((riquezaData.florestasCongo/riquezaData.total)*100).toFixed(1)}%)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Fora dos Hotspots</CardTitle>
                  <TrendingUp className="h-4 w-4 text-gray-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-600">{riquezaData.foraHotspots}</div>
                  <p className="text-xs text-muted-foreground">espécies ({((riquezaData.foraHotspots/riquezaData.total)*100).toFixed(1)}%)</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Resumo</CardTitle>
                <CardDescription>
                  O que esperar desse estudo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  A análise investigou a hipótese de que os hotspots de biodiversidade, especificamente a 
                  <strong> Mata Atlântica</strong> e as <strong>Florestas do Congo</strong>, concentram maior 
                  riqueza e diversidade de espécies de primatas devido à sobreposição de diferentes biomas e 
                  à heterogeneidade ambiental, além da compreensão da abundância de espécies e a distribuição
                  das espécies em diferentes biomas.
                </p>
              </CardContent>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Para que nossa proposta pudesse ser testada, foram observadas diversas medidas resumos para 
                  compreender-mos o comportamento da nossas populações amostrais e testa-las posteriormente os
                  testes se basearem em analises estatisticas usando indices de biodiversidade e para avaliação
                  das diferenças foram submetidos ao teste estatistico de Kruskal-Wallis, já para compreender 
                  o comportamento das populações foram inferidos valores de distância entre individuos mediante,
                  valores de latitude e longitude além do estudo das abundâncias de espécies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">156 espécies analisadas</Badge>
                  <Badge variant="secondary">2 hotspots principais</Badge>
                  <Badge variant="secondary">Índice de Shannon</Badge>
                  <Badge variant="secondary">Índice de gini-Simpsom</Badge>
                  <Badge variant="secondary">Teste de Kruskal-Wallis</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hypothesis Tab */}
          <TabsContent value="hypothesis" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Formulação das Hipóteses
                </CardTitle>
                <CardDescription>
                  Definição clara das hipóteses nula e alternativa para o teste estatístico
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">Hipótese Nula (H₀)</h3>
                    <Alert>
                      <XCircle className="h-4 w-4" />
                      <AlertTitle>H₀</AlertTitle>
                      <AlertDescription>
                        {hipoteseData.nula}
                      </AlertDescription>
                    </Alert>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">Hipótese Alternativa (H₁)</h3>
                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertTitle>H₁</AlertTitle>
                      <AlertDescription>
                        {hipoteseData.alternativa}
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Fundamentação Teórica</h3>
                  <p className="text-blue-800 mb-4">
                    Os hotspots de biodiversidade são regiões que concentram excepcionalmente alta diversidade 
                    de espécies endêmicas e enfrentam ameaças significativas de perda de habitat. A teoria 
                    ecológica sugere que essas áreas apresentam:
                  </p>
                  <ul className="list-disc list-inside text-blue-800 space-y-2">
                    <li>Maior heterogeneidade ambiental</li>
                    <li>Sobreposição de diferentes biomas</li>
                    <li>Condições climáticas favoráveis</li>
                    <li>Maior disponibilidade de nichos ecológicos</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {hipoteseData.resultado === 'Não Rejeitada' ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <CircleCheckBig className="w-5 h-5 text-green-600" />
                  )}
                  Resultado do Teste de Hipótese
                </CardTitle>
                <CardDescription>
                  Análise estatística dos dados de riqueza de primatas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert className={hipoteseData.resultado === 'Não Rejeitada' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-green-50'}>
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle className="text-lg">
                    Hipótese Nula: {hipoteseData.resultado === 'Não Rejeitada' ? 'Não Rejeitada' : 'Não Rejeitada'}
                  </AlertTitle>
                  <AlertDescription className="text-base mt-2">
                    {hipoteseData.conclusao}
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Valor-p</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600">{hipoteseData.pValor}</div>
                      <p className="text-xs text-muted-foreground">p &lt; 0.05 (significativo)</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Nível de Significância</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">0.05</div>
                      <p className="text-xs text-muted-foreground">α = 5%</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Teste Aplicado</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-bold">Kruskal-Wallis</div>
                      <p className="text-xs text-muted-foreground">análise de variância de um fator em postos</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Interpretação dos Resultados</h3>
                  <p className="text-green-800 mb-4">
                    Com um valor-p de {hipoteseData.pValor} (maior que 0,05), não rejeitamos a hipótese 
                    nula. Isso indica que, com base nos dados analisados, **não foram observadas diferenças significativas** 
                    na diversidade de espécies de primatas entre os hotspots de biodiversidade e outras áreas.
                  </p>
                  <p className="text-green-800">
                    Embora não possamos afirmar com total certeza que os dados estejam livres de viés amostral, 
                    os resultados sugerem que os hotspots de biodiversidade, como a Mata Atlântica e as Florestas do Congo, 
                    apresentam uma diversidade de primatas semelhante à encontrada em regiões fora desses hotspots, por mais
                    que a riqueza de espécies seja elevada. 
                    Essa semelhança pode indicar que as pressões ambientais estão afetando igualmente as populações de primatas 
                    dentro e fora dos hotspots. Alternativamente, pode ser que, apesar da diversidade esperada nos hotspots, 
                    a distribuição atual esteja mais homogênea devido a fatores ecológicos ou humanos. 
                    Assim, os dados não fornecem evidências suficientes para apoiar a hipótese de que os hotspots concentram 
                    significativamente mais espécies de primatas do que outras áreas.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>GALERIA</CardTitle>
                <CardDescription>
                  Gráficos gerados durante todo o processo de análise.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <img src="./images/mapa_ocorrencias_primatas.png" alt="Mapa de Ocorrências de Primatas" className="w-full h-auto rounded-lg shadow-md" />
                  <img src="./images/riqueza_por_regiao.png" alt="Riqueza de Espécies por Região" className="w-full h-auto rounded-lg shadow-md" />
                  <img src="./images/hotspots_mata_atlantica.png" alt="Hotspots de Riqueza de Primatas na Mata Atlântica" className="w-full h-auto rounded-lg shadow-md" />
                  <img src="./images/hotspots_riqueza_congo_forest.png" alt="Hotspots de Riqueza de Primatas na Floresta do Congo" className="w-full h-auto rounded-lg shadow-md" />
                  <img src="./images/diversidade_shannon_por_regiao.png" alt="Índice de diversidade shannon" className="w-full h-auto rounded-lg shadow-md" />
                  <img src="./images/diversidade_simpson_por_regiao.png" alt="Índice de diversidade simpsom" className="w-full h-auto rounded-lg shadow-md" />
                  <img src="./images/Rplot.png" alt="Dotplot região avaliada" className="w-full h-auto rounded-lg shadow-md" />
                  <img src="./images/Rplot08.png" alt="Densidade de região avaliada" className="w-full h-auto rounded-lg shadow-md" />
                  <img src="./images/Rplot09.png" alt="TOP10 espécies mais abundantes" className="w-full h-auto rounded-lg shadow-md" />
                  <img src="./images/Rplot10.png" alt="Medidas resumo" className="w-full h-auto rounded-lg shadow-md" />
                  <img src="./images/Rplot11.png" alt="Árvore de relações" className="w-full h-auto rounded-lg shadow-md" />
                  <img src="./images/Rplot12.png" alt="Densidade dos desvios avaliados" className="w-full h-auto rounded-lg shadow-md" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Diversidade Shannon</CardTitle>
                      <CardDescription>Índice de Shannon por Região</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Mata Atlântica: <strong>{diversidadeAlfaData.shannon.mataAtlantica}</strong></p>
                      <p>Florestas do Congo: <strong>{diversidadeAlfaData.shannon.florestasCongo}</strong></p>
                      <p>Fora dos Hotspots: <strong>{diversidadeAlfaData.shannon.foraHotspots}</strong></p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Diversidade Simpson</CardTitle>
                      <CardDescription>Índice de Simpson por Região</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Mata Atlântica: <strong>{diversidadeAlfaData.simpson.mataAtlantica}</strong></p>
                      <p>Florestas do Congo: <strong>{diversidadeAlfaData.simpson.florestasCongo}</strong></p>
                      <p>Fora dos Hotspots: <strong>{diversidadeAlfaData.simpson.foraHotspots}</strong></p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Methodology Tab */}
          <TabsContent value="methodology" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Metodologia da Análise</CardTitle>
                <CardDescription>
                  Descrição dos métodos utilizados na análise
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Ferramentas Utilizadas</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-1.5"></div>
                        R (linguagem de programação estatística) e Python (linguagem de programação)
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-1.5"></div>
                        Bibliotecas/Pacotes: tidyverse, rredlist, patchwork, ggdensity, sf, 
                        viridis, igraph, ggraph, vegan, betapart, phyloseq, cowplot, 
                        ggpubr, factoextra, ade4, pandas, numpy, matplotlib, matplotlib
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-1.5"></div>
                        Análise geoespacial com objetos sf e geopandas
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Dados Utilizados</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-1.5"></div>
                        Arquivo solicitados pela API rgbif
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-1.5"></div>
                        Shapefiles contendo a vetorização dos mapas
                      </li>
                    </ul>
                  </div>

                  
                </div>

                <h3 className="text-lg font-semibold mb-3">Etapas da Análise</h3>
                <ol className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full text-xs font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Definição dos Hotspots</h4>
                      <p className="text-gray-700">Estabelecimento das coordenadas geográficas dos hotspots de biodiversidade (Mata Atlântica e Florestas do Congo) usando bounding boxes aproximadas.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full text-xs font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Filtragem Geoespacial</h4>
                      <p className="text-gray-700">Identificação das ocorrências de primatas dentro e fora dos hotspots usando análise de intersecção espacial.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full text-xs font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Cálculo de Riqueza</h4>
                      <p className="text-gray-700">Contagem do número de espécies únicas em cada região (hotspots vs. outras áreas).</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full text-xs font-bold">4</div>
                    <div>
                      <h4 className="font-semibold">Análise de Diversidade Alfa</h4>
                      <p className="text-gray-700">Cálculo dos índices de Shannon e Simpson para cada região.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full text-xs font-bold">5</div>
                    <div>
                      <h4 className="font-semibold">Teste Estatístico</h4>
                      <p className="text-gray-700">Aplicação de Kruskal-Wallis para testar diferenças significativas na riqueza entre as regiões.</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Panorama Global da Biodiversidade de Primatas: Distribuição, riqueza e conectividade. Todos os direitos reservados à Ch1m4nsk1.</p>
          <p className="text-sm mt-2">Biologia comparada</p>
        </div>
      </footer>
    </div>
  )
}

export default App



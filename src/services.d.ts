interface Workspace extends Model {
	Camera: Camera;
	Arena: Folder & {
		Used: Folder & {
			anims: Folder & {
				["03_dodo"]: Folder & {
					["03_dodo_idle"]: KeyframeSequence & {
						End: Keyframe & {
							Esqueleto: Pose;
							["Foot.L_end"]: Pose;
							["Foot.R_end"]: Pose;
							Dodo: Pose & {
								["Foot.R"]: Pose;
								RootPart: Pose & {
									Body: Pose & {
										["wing.L"]: Pose;
										tail: Pose;
										["wing.R"]: Pose;
										Head: Pose & {
											feather: Pose;
										};
									};
								};
								["Foot.L"]: Pose;
							};
							feather_end: Pose;
							["wing.L_end"]: Pose;
							tail_end: Pose;
							["wing.R_end"]: Pose;
							RootNode: Pose;
						};
					};
					["03_dodo_dig"]: KeyframeSequence & {
						End: Keyframe & {
							Esqueleto: Pose;
							["Foot.L_end"]: Pose;
							["Foot.R_end"]: Pose;
							Dodo: Pose & {
								["Foot.R"]: Pose;
								RootPart: Pose & {
									Body: Pose & {
										["wing.L"]: Pose;
										tail: Pose;
										["wing.R"]: Pose;
										Head: Pose & {
											feather: Pose;
										};
									};
								};
								["Foot.L"]: Pose;
							};
							feather_end: Pose;
							["wing.L_end"]: Pose;
							tail_end: Pose;
							["wing.R_end"]: Pose;
							RootNode: Pose;
						};
					};
					["03_dodo_jump"]: KeyframeSequence & {
						End: Keyframe & {
							Esqueleto: Pose;
							["Foot.L_end"]: Pose;
							["Foot.R_end"]: Pose;
							Dodo: Pose & {
								["Foot.R"]: Pose;
								RootPart: Pose & {
									Body: Pose & {
										["wing.L"]: Pose;
										tail: Pose;
										["wing.R"]: Pose;
										Head: Pose & {
											feather: Pose;
										};
									};
								};
								["Foot.L"]: Pose;
							};
							feather_end: Pose;
							["wing.L_end"]: Pose;
							tail_end: Pose;
							["wing.R_end"]: Pose;
							RootNode: Pose;
						};
					};
				};
				["5_terror_bird"]: Folder & {
					["5_terror_bird_dig"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							tail_01_end: Pose;
							wing_end_R: Pose;
							Terror_Bird_5: Pose;
							Foot_end_R_end: Pose;
							Foot_end_R: Pose;
							wing_end_L_end: Pose;
							wing_end_L: Pose;
							Foot_end_L_end: Pose;
							Foot_end_L: Pose;
							wing_end_R_end: Pose;
							tail_01_end_end: Pose;
							["Terror_Bird_5.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										Neck_01: Pose & {
											Neck_02: Pose & {
												Head: Pose;
											};
										};
										wing_R: Pose;
										tail_01: Pose;
										Foot_L: Pose;
										Foot_R: Pose;
										wing_L: Pose;
									};
								};
							};
							RootNode: Pose;
						};
					};
					["5_terror_bird_jump"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							tail_01_end: Pose;
							wing_end_R: Pose;
							Terror_Bird_5: Pose;
							Foot_end_R_end: Pose;
							Foot_end_R: Pose;
							wing_end_L_end: Pose;
							wing_end_L: Pose;
							Foot_end_L_end: Pose;
							Foot_end_L: Pose;
							wing_end_R_end: Pose;
							tail_01_end_end: Pose;
							["Terror_Bird_5.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										Neck_01: Pose & {
											Neck_02: Pose & {
												Head: Pose;
											};
										};
										wing_R: Pose;
										tail_01: Pose;
										Foot_L: Pose;
										Foot_R: Pose;
										wing_L: Pose;
									};
								};
							};
							RootNode: Pose;
						};
					};
				};
				["2_coelodonta"]: Folder & {
					["2_coelodonta_jump"]: KeyframeSequence;
					["2_coelodonta_idle"]: KeyframeSequence;
				};
				["4_megatherium"]: Folder & {
					["4_megatherium_idle"]: KeyframeSequence;
					["4_megatherium_jump"]: KeyframeSequence;
				};
				["7_guardian_dog"]: Folder & {
					["7_guardian_dog_idle"]: KeyframeSequence;
					["7_guardian_dog_jump"]: KeyframeSequence;
				};
				["13_bearded_dragon"]: Folder & {
					["13_bearded_dragon_jump"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							BFoot_end_R: Pose;
							joint10: Pose;
							BFoot_end_L: Pose;
							["Bearded_Dragon_13.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										BFoot_R: Pose;
										BFoot_L: Pose;
										Tail_01: Pose & {
											Tail_02: Pose & {
												Tail_03: Pose & {
													Tail_04: Pose & {
														Tail_05: Pose & {
															Tail_06: Pose & {
																Tail_07: Pose & {
																	Tail_08: Pose & {
																		Tail_09: Pose & {
																			Tail_10: Pose & {
																				Tail_11: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
										FFoot_R: Pose;
										FFoot_L: Pose;
										Head: Pose;
									};
								};
							};
							FFoot_end_R: Pose;
							joint10_end: Pose;
							FFoot_end_L: Pose;
							Bearded_Dragon_13: Pose;
							FFoot_end_R_end: Pose;
							RootNode: Pose;
							BFoot_end_L_end: Pose;
							FFoot_end_L_end: Pose;
							BFoot_end_R_end: Pose;
						};
					};
					["13_bearded_dragon_idle"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							BFoot_end_R: Pose;
							joint10: Pose;
							BFoot_end_L: Pose;
							["Bearded_Dragon_13.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										BFoot_R: Pose;
										BFoot_L: Pose;
										Tail_01: Pose & {
											Tail_02: Pose & {
												Tail_03: Pose & {
													Tail_04: Pose & {
														Tail_05: Pose & {
															Tail_06: Pose & {
																Tail_07: Pose & {
																	Tail_08: Pose & {
																		Tail_09: Pose & {
																			Tail_10: Pose & {
																				Tail_11: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
										FFoot_R: Pose;
										FFoot_L: Pose;
										Head: Pose;
									};
								};
							};
							FFoot_end_R: Pose;
							joint10_end: Pose;
							FFoot_end_L: Pose;
							Bearded_Dragon_13: Pose;
							FFoot_end_R_end: Pose;
							RootNode: Pose;
							BFoot_end_L_end: Pose;
							FFoot_end_L_end: Pose;
							BFoot_end_R_end: Pose;
						};
					};
					["13_bearded_dragon_dig"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							BFoot_end_R: Pose;
							joint10: Pose;
							BFoot_end_L: Pose;
							["Bearded_Dragon_13.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										BFoot_R: Pose;
										BFoot_L: Pose;
										Tail_01: Pose & {
											Tail_02: Pose & {
												Tail_03: Pose & {
													Tail_04: Pose & {
														Tail_05: Pose & {
															Tail_06: Pose & {
																Tail_07: Pose & {
																	Tail_08: Pose & {
																		Tail_09: Pose & {
																			Tail_10: Pose & {
																				Tail_11: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
										FFoot_R: Pose;
										FFoot_L: Pose;
										Head: Pose;
									};
								};
							};
							FFoot_end_R: Pose;
							joint10_end: Pose;
							FFoot_end_L: Pose;
							Bearded_Dragon_13: Pose;
							FFoot_end_R_end: Pose;
							RootNode: Pose;
							BFoot_end_L_end: Pose;
							FFoot_end_L_end: Pose;
							BFoot_end_R_end: Pose;
						};
					};
				};
				["16_sphinx"]: Folder & {
					["16_sphinx_jump"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							BFoot_end_R: Pose;
							BFoot_end_L: Pose;
							BFoot_end_R_end: Pose;
							FFoot_end_R: Pose;
							BFoot_end_L_end: Pose;
							FFoot_end_L: Pose;
							Sphinx_16: Pose;
							FFoot_end_R_end: Pose;
							FFoot_end_L_end: Pose;
							Tail_03_end: Pose;
							["Sphinx_16.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										BFoot_R: Pose;
										BFoot_L: Pose;
										Tail_01: Pose & {
											Tail_02: Pose & {
												Tail_03: Pose;
											};
										};
										FFoot_R: Pose;
										FFoot_L: Pose;
										Head: Pose;
									};
								};
							};
							RootNode: Pose;
						};
					};
					["16_sphinx_dig"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							BFoot_end_R: Pose;
							BFoot_end_L: Pose;
							BFoot_end_R_end: Pose;
							FFoot_end_R: Pose;
							BFoot_end_L_end: Pose;
							FFoot_end_L: Pose;
							Sphinx_16: Pose;
							FFoot_end_R_end: Pose;
							FFoot_end_L_end: Pose;
							Tail_03_end: Pose;
							["Sphinx_16.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										BFoot_R: Pose;
										BFoot_L: Pose;
										Tail_01: Pose & {
											Tail_02: Pose & {
												Tail_03: Pose;
											};
										};
										FFoot_R: Pose;
										FFoot_L: Pose;
										Head: Pose;
									};
								};
							};
							RootNode: Pose;
						};
					};
					["16_sphinx_idle"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							BFoot_end_L_end: Pose;
							BFoot_end_L: Pose;
							FFoot_end_L_end: Pose;
							FFoot_end_R: Pose;
							BFoot_end_R_end: Pose;
							FFoot_end_L: Pose;
							BFoot_end_R: Pose;
							FFoot_end_R_end: Pose;
							Sphinx_16: Pose;
							Tail_03_end: Pose;
							["Sphinx_16.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										BFoot_R: Pose;
										BFoot_L: Pose;
										Tail_01: Pose & {
											Tail_02: Pose & {
												Tail_03: Pose;
											};
										};
										FFoot_R: Pose;
										FFoot_L: Pose;
										Head: Pose;
									};
								};
							};
							RootNode: Pose;
						};
					};
				};
				["20_spirit_wolf"]: Folder & {
					["20_spirit_wolf_idle"]: KeyframeSequence & {
						End: Keyframe & {
							Spirit_Wolf_20: Pose;
							["Spirit_Wolf_20.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										BFoot_R: Pose;
										BFoot_L: Pose;
										Tail_01: Pose & {
											Tail_02: Pose & {
												Tail_03: Pose & {
													Tail_04: Pose & {
														Tail_05: Pose & {
															Tail_06: Pose;
														};
													};
												};
											};
										};
										FFoot_R: Pose;
										FFoot_L: Pose;
										Head: Pose;
									};
								};
							};
							Tail_07_end: Pose;
							BFoot_end_L: Pose;
							FFoot_end_L_end: Pose;
							FFoot_end_R: Pose;
							BFoot_end_R: Pose;
							FFoot_end_L: Pose;
							BFoot_end_R_end: Pose;
							FFoot_end_R_end: Pose;
							Head_end: Pose;
							BFoot_end_L_end: Pose;
							Tail_07: Pose;
							RootNode: Pose;
						};
					};
					["20_spirit_wolf_dig"]: KeyframeSequence & {
						End: Keyframe & {
							Spirit_Wolf_20: Pose;
							["Spirit_Wolf_20.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										BFoot_R: Pose;
										BFoot_L: Pose;
										Tail_01: Pose & {
											Tail_02: Pose & {
												Tail_03: Pose & {
													Tail_04: Pose & {
														Tail_05: Pose & {
															Tail_06: Pose;
														};
													};
												};
											};
										};
										FFoot_R: Pose;
										FFoot_L: Pose;
										Head: Pose;
									};
								};
							};
							Tail_07_end: Pose;
							BFoot_end_L: Pose;
							FFoot_end_L_end: Pose;
							FFoot_end_R: Pose;
							BFoot_end_R: Pose;
							FFoot_end_L: Pose;
							BFoot_end_R_end: Pose;
							FFoot_end_R_end: Pose;
							Head_end: Pose;
							BFoot_end_L_end: Pose;
							Tail_07: Pose;
							RootNode: Pose;
						};
					};
					["20_spirit_wolf_jump"]: KeyframeSequence & {
						End: Keyframe & {
							Spirit_Wolf_20: Pose;
							["Spirit_Wolf_20.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										BFoot_R: Pose;
										BFoot_L: Pose;
										Tail_01: Pose & {
											Tail_02: Pose & {
												Tail_03: Pose & {
													Tail_04: Pose & {
														Tail_05: Pose & {
															Tail_06: Pose;
														};
													};
												};
											};
										};
										FFoot_R: Pose;
										FFoot_L: Pose;
										Head: Pose;
									};
								};
							};
							Tail_07_end: Pose;
							BFoot_end_L: Pose;
							FFoot_end_L_end: Pose;
							FFoot_end_R: Pose;
							BFoot_end_R: Pose;
							FFoot_end_L: Pose;
							BFoot_end_R_end: Pose;
							FFoot_end_R_end: Pose;
							Head_end: Pose;
							BFoot_end_L_end: Pose;
							Tail_07: Pose;
							RootNode: Pose;
						};
					};
				};
				["10_giant_crab"]: Folder & {
					["10_giant_crab_idle"]: KeyframeSequence;
					["10_giant_crab_jump"]: KeyframeSequence;
				};
				["01_sabertooth"]: Folder & {
					["01_sabertooth_jump"]: KeyframeSequence;
					["01_sabertooth_dig"]: KeyframeSequence & {
						End: Keyframe & {
							["FLeg.R_end"]: Pose;
							["FLeg.L_end"]: Pose;
							["BLeg.R_end"]: Pose;
							Body: Pose & {
								["BLeg.L"]: Pose;
								["FLeg.R"]: Pose;
								tail: Pose & {
									["tail.001"]: Pose & {
										["tail.002"]: Pose & {
											["tail.003"]: Pose & {
												["tail.004"]: Pose;
											};
										};
									};
								};
								["FLeg.L"]: Pose;
								["BLeg.R"]: Pose;
								body: Pose & {
									head: Pose;
								};
							};
							["tail.004_end"]: Pose;
							Root_end: Pose;
							head_end: Pose;
							Root: Pose;
							["BLeg.L_end"]: Pose;
							organic: Pose;
							RootNode: Pose;
						};
					};
					["01_sabertooth_idle"]: KeyframeSequence & {
						End: Keyframe & {
							["FLeg.R_end"]: Pose;
							["FLeg.L_end"]: Pose;
							["BLeg.R_end"]: Pose;
							Body: Pose & {
								["BLeg.L"]: Pose;
								["FLeg.R"]: Pose;
								tail: Pose & {
									["tail.001"]: Pose & {
										["tail.002"]: Pose & {
											["tail.003"]: Pose & {
												["tail.004"]: Pose;
											};
										};
									};
								};
								["FLeg.L"]: Pose;
								["BLeg.R"]: Pose;
								body: Pose & {
									head: Pose;
								};
							};
							["tail.004_end"]: Pose;
							Root_end: Pose;
							head_end: Pose;
							Root: Pose;
							["BLeg.L_end"]: Pose;
							organic: Pose;
							RootNode: Pose;
						};
					};
				};
				["06_mamuth"]: Folder & {
					["06_mamuth_idle"]: KeyframeSequence;
					["06_mamuth_dig"]: KeyframeSequence;
					["06_mamuth_jump"]: KeyframeSequence & {
						End: Keyframe & {
							["FLeg.R_end"]: Pose;
							["FLeg.L_end"]: Pose;
							["BLeg.R_end"]: Pose;
							MammuthFossil: Pose;
							["tronk.003_end"]: Pose;
							["BLeg.L_end"]: Pose;
							CuerpoEsq: Pose & {
								Rootpart: Pose & {
									["BLeg.L"]: Pose;
									["FLeg.R"]: Pose;
									["FLeg.L"]: Pose;
									["BLeg.R"]: Pose;
									Body: Pose & {
										tail: Pose & {
											["tail.001"]: Pose & {
												["tail.002"]: Pose & {
													["tail.003"]: Pose & {
														["tail.004"]: Pose & {
															["tail.005"]: Pose;
														};
													};
												};
											};
										};
										Head: Pose & {
											tronk: Pose & {
												["tronk.001"]: Pose & {
													["tronk.002"]: Pose & {
														["tronk.003"]: Pose;
													};
												};
											};
										};
									};
								};
							};
							["tail.006_end"]: Pose;
							["tail.006"]: Pose;
							RootNode: Pose;
						};
					};
				};
				["07_bracho"]: Folder & {
					["07_bracho_idle"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							["FFoot.R_end"]: Pose;
							BrachiosaurusEsq: Pose;
							["BFoot.L_end"]: Pose;
							Bone: Pose & {
								["FFoot.L"]: Pose;
								["BFoot.R"]: Pose;
								["BFoot.L"]: Pose;
								RootPart: Pose & {
									Body: Pose & {
										neck: Pose & {
											["neck.001"]: Pose & {
												["neck.002"]: Pose & {
													["neck.003"]: Pose & {
														["neck.004"]: Pose & {
															["neck.005"]: Pose & {
																["neck.006"]: Pose & {
																	["neck.007"]: Pose & {
																		Head: Pose;
																	};
																};
															};
														};
													};
												};
											};
										};
										Tail1: Pose & {
											Tail2: Pose & {
												Tail3: Pose & {
													Tail4: Pose & {
														Tail5: Pose & {
															Tail6: Pose & {
																Tail7: Pose & {
																	Tail8: Pose & {
																		Tail9: Pose & {
																			Tail10: Pose & {
																				Tail11: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
								["FFoot.R"]: Pose;
							};
							RootNode: Pose;
							["BFoot.R_end"]: Pose;
							["FFoot.L_end"]: Pose;
							Tail11_end: Pose;
						};
					};
					["07_bracho_jump"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							["FFoot.R_end"]: Pose;
							BrachiosaurusEsq: Pose;
							["BFoot.L_end"]: Pose;
							Bone: Pose & {
								["FFoot.L"]: Pose;
								["BFoot.R"]: Pose;
								["BFoot.L"]: Pose;
								RootPart: Pose & {
									Body: Pose & {
										neck: Pose & {
											["neck.001"]: Pose & {
												["neck.002"]: Pose & {
													["neck.003"]: Pose & {
														["neck.004"]: Pose & {
															["neck.005"]: Pose & {
																["neck.006"]: Pose & {
																	["neck.007"]: Pose & {
																		Head: Pose;
																	};
																};
															};
														};
													};
												};
											};
										};
										Tail1: Pose & {
											Tail2: Pose & {
												Tail3: Pose & {
													Tail4: Pose & {
														Tail5: Pose & {
															Tail6: Pose & {
																Tail7: Pose & {
																	Tail8: Pose & {
																		Tail9: Pose & {
																			Tail10: Pose & {
																				Tail11: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
								["FFoot.R"]: Pose;
							};
							RootNode: Pose;
							["BFoot.R_end"]: Pose;
							["FFoot.L_end"]: Pose;
							Tail11_end: Pose;
						};
					};
					["07_bracho_dig"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							["FFoot.R_end"]: Pose;
							BrachiosaurusEsq: Pose;
							["BFoot.L_end"]: Pose;
							Bone: Pose & {
								["FFoot.L"]: Pose;
								["BFoot.R"]: Pose;
								["BFoot.L"]: Pose;
								RootPart: Pose & {
									Body: Pose & {
										neck: Pose & {
											["neck.001"]: Pose & {
												["neck.002"]: Pose & {
													["neck.003"]: Pose & {
														["neck.004"]: Pose & {
															["neck.005"]: Pose & {
																["neck.006"]: Pose & {
																	["neck.007"]: Pose & {
																		Head: Pose;
																	};
																};
															};
														};
													};
												};
											};
										};
										Tail1: Pose & {
											Tail2: Pose & {
												Tail3: Pose & {
													Tail4: Pose & {
														Tail5: Pose & {
															Tail6: Pose & {
																Tail7: Pose & {
																	Tail8: Pose & {
																		Tail9: Pose & {
																			Tail10: Pose & {
																				Tail11: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
								["FFoot.R"]: Pose;
							};
							RootNode: Pose;
							["BFoot.R_end"]: Pose;
							["FFoot.L_end"]: Pose;
							Tail11_end: Pose;
						};
					};
				};
				["6_behemotops"]: Folder & {
					["6_behemotops_idle"]: KeyframeSequence;
					["6_behemotops_jump"]: KeyframeSequence;
				};
				["17_anubis"]: Folder & {
					["17_anubis_jump"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							Hand_end_R_end: Pose;
							Foot_end_R_end: Pose;
							Hand_end_R: Pose;
							Hand_end_L_end: Pose;
							["Anubis_17.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										Foot_L: Pose;
										Hand_R: Pose;
										Hand_L: Pose;
										Foot_R: Pose;
										Neck: Pose & {
											Head: Pose;
										};
									};
								};
							};
							Foot_end_L_end: Pose;
							Foot_end_L: Pose;
							Anubis_17: Pose;
							Hand_end_L: Pose;
							Foot_end_R: Pose;
							RootNode: Pose;
						};
					};
					["17_anubis_dig"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							Hand_end_R_end: Pose;
							Foot_end_R_end: Pose;
							Hand_end_R: Pose;
							Hand_end_L_end: Pose;
							["Anubis_17.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										Foot_L: Pose;
										Hand_R: Pose;
										Hand_L: Pose;
										Foot_R: Pose;
										Neck: Pose & {
											Head: Pose;
										};
									};
								};
							};
							Foot_end_L_end: Pose;
							Foot_end_L: Pose;
							Anubis_17: Pose;
							Hand_end_L: Pose;
							Foot_end_R: Pose;
							RootNode: Pose;
						};
					};
					["17_anubis_idle"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							Hand_end_R_end: Pose;
							Foot_end_R_end: Pose;
							Hand_end_R: Pose;
							Hand_end_L_end: Pose;
							["Anubis_17.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										Foot_L: Pose;
										Hand_R: Pose;
										Hand_L: Pose;
										Foot_R: Pose;
										Neck: Pose & {
											Head: Pose;
										};
									};
								};
							};
							Foot_end_L_end: Pose;
							Foot_end_L: Pose;
							Anubis_17: Pose;
							Hand_end_L: Pose;
							Foot_end_R: Pose;
							RootNode: Pose;
						};
					};
				};
				["08_trex"]: Folder & {
					["08_trex_idle"]: KeyframeSequence & {
						End: Keyframe & {
							head_end: Pose;
							["Leg.R_end"]: Pose;
							Body_low: Pose & {
								Root: Pose & {
									Body: Pose & {
										["Hand.L"]: Pose;
										Tail: Pose & {
											["Tail.001"]: Pose & {
												["Tail.002"]: Pose & {
													["Tail.003"]: Pose & {
														["Tail.004"]: Pose & {
															["Tail.005"]: Pose;
														};
													};
												};
											};
										};
										head: Pose;
										["Hand.R"]: Pose;
									};
								};
								["Leg.L"]: Pose;
								["Leg.R"]: Pose;
							};
							["Leg.L_end"]: Pose;
							Armature: Pose;
							["Tail.005_end"]: Pose;
							["Hand.R_end"]: Pose;
							["Hand.L_end"]: Pose;
							RootNode: Pose;
						};
					};
					["08_trex_dig"]: KeyframeSequence & {
						End: Keyframe & {
							head_end: Pose;
							["Leg.R_end"]: Pose;
							Body_low: Pose & {
								Root: Pose & {
									Body: Pose & {
										["Hand.L"]: Pose;
										Tail: Pose & {
											["Tail.001"]: Pose & {
												["Tail.002"]: Pose & {
													["Tail.003"]: Pose & {
														["Tail.004"]: Pose & {
															["Tail.005"]: Pose;
														};
													};
												};
											};
										};
										head: Pose;
										["Hand.R"]: Pose;
									};
								};
								["Leg.L"]: Pose;
								["Leg.R"]: Pose;
							};
							["Leg.L_end"]: Pose;
							Armature: Pose;
							["Tail.005_end"]: Pose;
							["Hand.R_end"]: Pose;
							["Hand.L_end"]: Pose;
							RootNode: Pose;
						};
					};
					["08_trex_jump"]: KeyframeSequence & {
						End: Keyframe & {
							head_end: Pose;
							["Leg.R_end"]: Pose;
							Body_low: Pose & {
								Root: Pose & {
									Body: Pose & {
										["Hand.L"]: Pose;
										Tail: Pose & {
											["Tail.001"]: Pose & {
												["Tail.002"]: Pose & {
													["Tail.003"]: Pose & {
														["Tail.004"]: Pose & {
															["Tail.005"]: Pose;
														};
													};
												};
											};
										};
										head: Pose;
										["Hand.R"]: Pose;
									};
								};
								["Leg.L"]: Pose;
								["Leg.R"]: Pose;
							};
							["Leg.L_end"]: Pose;
							Armature: Pose;
							["Tail.005_end"]: Pose;
							["Hand.R_end"]: Pose;
							["Hand.L_end"]: Pose;
							RootNode: Pose;
						};
					};
				};
				["02_triceratops"]: Folder & {
					["02_triceratops_jump"]: KeyframeSequence & {
						End: Keyframe & {
							["FLeg.R_end"]: Pose;
							Tip: Pose;
							Cuerpo_low: Pose & {
								Root: Pose & {
									["BLeg.L"]: Pose;
									["FLeg.R"]: Pose;
									["FLeg.L"]: Pose;
									["BLeg.R"]: Pose;
									Body: Pose & {
										head: Pose;
										["Body.001"]: Pose & {
											["Body.002"]: Pose & {
												["Body.003"]: Pose & {
													["Body.004"]: Pose & {
														["Body.005"]: Pose;
													};
												};
											};
										};
									};
								};
							};
							UpHead_end: Pose;
							["Armature.001"]: Pose;
							Pole: Pose;
							["BLeg.L_end"]: Pose;
							Pole_end: Pose;
							["BLeg.R_end"]: Pose;
							Mouth_end: Pose;
							["Body.005_end"]: Pose;
							UpHead: Pose;
							["FLeg.L_end"]: Pose;
							Mouth: Pose;
							Tip_end: Pose;
							RootNode: Pose;
						};
					};
					["02_triceratops_idle"]: KeyframeSequence & {
						End: Keyframe & {
							["FLeg.R_end"]: Pose;
							Tip: Pose;
							Cuerpo_low: Pose & {
								Root: Pose & {
									["BLeg.L"]: Pose;
									["FLeg.R"]: Pose;
									["FLeg.L"]: Pose;
									["BLeg.R"]: Pose;
									Body: Pose & {
										head: Pose;
										["Body.001"]: Pose & {
											["Body.002"]: Pose & {
												["Body.003"]: Pose & {
													["Body.004"]: Pose & {
														["Body.005"]: Pose;
													};
												};
											};
										};
									};
								};
							};
							UpHead_end: Pose;
							["Armature.001"]: Pose;
							Pole: Pose;
							["BLeg.L_end"]: Pose;
							Pole_end: Pose;
							["BLeg.R_end"]: Pose;
							Mouth_end: Pose;
							["Body.005_end"]: Pose;
							UpHead: Pose;
							["FLeg.L_end"]: Pose;
							Mouth: Pose;
							Tip_end: Pose;
							RootNode: Pose;
						};
					};
					["02_triceratops_dig"]: KeyframeSequence & {
						End: Keyframe & {
							["FLeg.R_end"]: Pose;
							Tip: Pose;
							Cuerpo_low: Pose & {
								Root: Pose & {
									["BLeg.L"]: Pose;
									["FLeg.R"]: Pose;
									["FLeg.L"]: Pose;
									["BLeg.R"]: Pose;
									Body: Pose & {
										head: Pose;
										["Body.001"]: Pose & {
											["Body.002"]: Pose & {
												["Body.003"]: Pose & {
													["Body.004"]: Pose & {
														["Body.005"]: Pose;
													};
												};
											};
										};
									};
								};
							};
							UpHead_end: Pose;
							["Armature.001"]: Pose;
							Pole: Pose;
							["BLeg.L_end"]: Pose;
							Pole_end: Pose;
							["BLeg.R_end"]: Pose;
							Mouth_end: Pose;
							["Body.005_end"]: Pose;
							UpHead: Pose;
							["FLeg.L_end"]: Pose;
							Mouth: Pose;
							Tip_end: Pose;
							RootNode: Pose;
						};
					};
				};
				["1_castoroides"]: Folder & {
					["1_castoroides_idle"]: KeyframeSequence & {
						End: Keyframe & {
							["Castoroides_1.001"]: Pose & {
								Null: IntValue;
								RootPart: Pose & {
									Body: Pose & {
										BFoot_R: Pose;
										BFoot_L: Pose;
										Tail_01: Pose & {
											Tail_02: Pose & {
												Tail_03: Pose;
											};
										};
										FFoot_R: Pose;
										FFoot_L: Pose;
										Heat: Pose;
									};
								};
							};
						};
					};
					["1_castoroides_dig"]: KeyframeSequence & {
						End: Keyframe & {
							BFoot_end_R: Pose;
							Castoroides_1: Pose;
							BFoot_end_L: Pose;
							Heat_end: Pose;
							FFoot_end_R: Pose;
							["Castoroides_1.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										BFoot_R: Pose;
										BFoot_L: Pose;
										Tail_01: Pose & {
											Tail_02: Pose & {
												Tail_03: Pose;
											};
										};
										FFoot_R: Pose;
										FFoot_L: Pose;
										Heat: Pose;
									};
								};
							};
							FFoot_end_L: Pose;
							BFoot_end_L_end: Pose;
							FFoot_end_R_end: Pose;
							FFoot_end_L_end: Pose;
							Tail_03_end: Pose;
							BFoot_end_R_end: Pose;
							RootNode: Pose;
						};
					};
					["1_castoroides_jump"]: KeyframeSequence;
				};
				["12_leon_desert"]: Folder & {
					["12_leon_desert_dig"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							BFoot_end_L_end: Pose;
							BFoot_end_L: Pose;
							Leon_Desert_12: Pose;
							FFoot_end_R: Pose;
							FFoot_end_L_end: Pose;
							FFoot_end_L: Pose;
							["Leon_Desert_12.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										BFoot_R: Pose;
										BFoot_L: Pose;
										Tail_01: Pose & {
											Tail_02: Pose & {
												Tail_03: Pose;
											};
										};
										FFoot_R: Pose;
										FFoot_L: Pose;
										Head: Pose;
									};
								};
							};
							FFoot_end_R_end: Pose;
							BFoot_end_R_end: Pose;
							Tail_03_end: Pose;
							BFoot_end_R: Pose;
							RootNode: Pose;
						};
					};
					["12_leon_desert_jump"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							BFoot_end_L_end: Pose;
							BFoot_end_L: Pose;
							Leon_Desert_12: Pose;
							FFoot_end_R: Pose;
							BFoot_end_R: Pose;
							FFoot_end_L: Pose;
							["Leon_Desert_12.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										BFoot_R: Pose;
										BFoot_L: Pose;
										Tail_01: Pose & {
											Tail_02: Pose & {
												Tail_03: Pose;
											};
										};
										FFoot_R: Pose;
										FFoot_L: Pose;
										Head: Pose;
									};
								};
							};
							FFoot_end_R_end: Pose;
							BFoot_end_R_end: Pose;
							Tail_03_end: Pose;
							FFoot_end_L_end: Pose;
							RootNode: Pose;
						};
					};
					["12_leon_desert_idle"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							BFoot_end_L_end: Pose;
							BFoot_end_L: Pose;
							Leon_Desert_12: Pose;
							FFoot_end_R: Pose;
							FFoot_end_L_end: Pose;
							FFoot_end_L: Pose;
							["Leon_Desert_12.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										BFoot_R: Pose;
										BFoot_L: Pose;
										Tail_01: Pose & {
											Tail_02: Pose & {
												Tail_03: Pose;
											};
										};
										FFoot_R: Pose;
										FFoot_L: Pose;
										Head: Pose;
									};
								};
							};
							FFoot_end_R_end: Pose;
							BFoot_end_R_end: Pose;
							Tail_03_end: Pose;
							BFoot_end_R: Pose;
							RootNode: Pose;
						};
					};
				};
				["04_dino"]: Folder & {
					["04_dino_jump"]: KeyframeSequence & {
						End: Keyframe & {
							["wingP9.R_end"]: Pose;
							Pterodactyl: Pose;
							Heat_end: Pose;
							["Foot.L_end"]: Pose;
							["Foot.R_end"]: Pose;
							PterodactylModel: Pose & {
								["Foot.R"]: Pose;
								RootPart: Pose & {
									Body: Pose & {
										["wingP1.R"]: Pose & {
											["wingP2.R"]: Pose & {
												["wingP3.R"]: Pose & {
													["wingP4.R"]: Pose & {
														["wingP5.R"]: Pose & {
															["wingP6.R"]: Pose & {
																["wingP7.R"]: Pose & {
																	["wingP8.R"]: Pose & {
																		["wingP9.R"]: Pose;
																	};
																};
															};
														};
													};
												};
											};
										};
										["wingP1.L"]: Pose & {
											["wingP2.L"]: Pose & {
												["wingP3.L"]: Pose & {
													["wingP4.L"]: Pose & {
														["wingP5.L"]: Pose & {
															["wingP6.L"]: Pose & {
																["wingP7.L"]: Pose & {
																	["wingP8.L"]: Pose & {
																		["wingP9.L"]: Pose;
																	};
																};
															};
														};
													};
												};
											};
										};
										Heat: Pose;
										Tail1: Pose & {
											Tail2: Pose & {
												Tail3: Pose & {
													Tail4: Pose;
												};
											};
										};
									};
								};
								["Foot.L"]: Pose;
							};
							Tail4_end: Pose;
							["wingP9.L_end"]: Pose;
							RootNode: Pose;
						};
					};
					["04_dino_idle"]: KeyframeSequence & {
						End: Keyframe & {
							["wingP9.R_end"]: Pose;
							Pterodactyl: Pose;
							Heat_end: Pose;
							["Foot.L_end"]: Pose;
							["Foot.R_end"]: Pose;
							PterodactylModel: Pose & {
								["Foot.R"]: Pose;
								RootPart: Pose & {
									Body: Pose & {
										["wingP1.R"]: Pose & {
											["wingP2.R"]: Pose & {
												["wingP3.R"]: Pose & {
													["wingP4.R"]: Pose & {
														["wingP5.R"]: Pose & {
															["wingP6.R"]: Pose & {
																["wingP7.R"]: Pose & {
																	["wingP8.R"]: Pose & {
																		["wingP9.R"]: Pose;
																	};
																};
															};
														};
													};
												};
											};
										};
										["wingP1.L"]: Pose & {
											["wingP2.L"]: Pose & {
												["wingP3.L"]: Pose & {
													["wingP4.L"]: Pose & {
														["wingP5.L"]: Pose & {
															["wingP6.L"]: Pose & {
																["wingP7.L"]: Pose & {
																	["wingP8.L"]: Pose & {
																		["wingP9.L"]: Pose;
																	};
																};
															};
														};
													};
												};
											};
										};
										Heat: Pose;
										Tail1: Pose & {
											Tail2: Pose & {
												Tail3: Pose & {
													Tail4: Pose;
												};
											};
										};
									};
								};
								["Foot.L"]: Pose;
							};
							Tail4_end: Pose;
							["wingP9.L_end"]: Pose;
							RootNode: Pose;
						};
					};
					["04_dino_dig"]: KeyframeSequence & {
						End: Keyframe & {
							["wingP9.R_end"]: Pose;
							Pterodactyl: Pose;
							Heat_end: Pose;
							["Foot.L_end"]: Pose;
							["Foot.R_end"]: Pose;
							PterodactylModel: Pose & {
								["Foot.R"]: Pose;
								RootPart: Pose & {
									Body: Pose & {
										["wingP1.R"]: Pose & {
											["wingP2.R"]: Pose & {
												["wingP3.R"]: Pose & {
													["wingP4.R"]: Pose & {
														["wingP5.R"]: Pose & {
															["wingP6.R"]: Pose & {
																["wingP7.R"]: Pose & {
																	["wingP8.R"]: Pose & {
																		["wingP9.R"]: Pose;
																	};
																};
															};
														};
													};
												};
											};
										};
										["wingP1.L"]: Pose & {
											["wingP2.L"]: Pose & {
												["wingP3.L"]: Pose & {
													["wingP4.L"]: Pose & {
														["wingP5.L"]: Pose & {
															["wingP6.L"]: Pose & {
																["wingP7.L"]: Pose & {
																	["wingP8.L"]: Pose & {
																		["wingP9.L"]: Pose;
																	};
																};
															};
														};
													};
												};
											};
										};
										Heat: Pose;
										Tail1: Pose & {
											Tail2: Pose & {
												Tail3: Pose & {
													Tail4: Pose;
												};
											};
										};
									};
								};
								["Foot.L"]: Pose;
							};
							Tail4_end: Pose;
							["wingP9.L_end"]: Pose;
							RootNode: Pose;
						};
					};
				};
				["14_horned_cobra"]: Folder & {
					["14_horned_cobra_jump"]: KeyframeSequence;
					["14_horned_cobra_idle"]: KeyframeSequence;
				};
				["05_black_velo"]: Folder & {
					["05_black_velo_jump"]: KeyframeSequence & {
						End: Keyframe & {
							head_end: Pose;
							Velociraptor: Pose & {
								Root: Pose & {
									Body: Pose & {
										["Hand.L"]: Pose;
										Tail: Pose & {
											["Tail.001"]: Pose & {
												["Tail.002"]: Pose & {
													["Tail.003"]: Pose & {
														["Tail.004"]: Pose;
													};
												};
											};
										};
										["Hand.R"]: Pose;
										head: Pose;
									};
								};
								["Leg.L"]: Pose;
								["Leg.R"]: Pose;
							};
							["Tail.004_end"]: Pose;
							["Leg.L_end"]: Pose;
							Armature: Pose;
							["Leg.R_end"]: Pose;
							["Hand.L_end"]: Pose;
							["Hand.R_end"]: Pose;
							RootNode: Pose;
						};
					};
					["05_black_velo_idle"]: KeyframeSequence & {
						End: Keyframe & {
							head_end: Pose;
							Velociraptor: Pose & {
								Root: Pose & {
									Body: Pose & {
										["Hand.L"]: Pose;
										Tail: Pose & {
											["Tail.001"]: Pose & {
												["Tail.002"]: Pose & {
													["Tail.003"]: Pose & {
														["Tail.004"]: Pose;
													};
												};
											};
										};
										["Hand.R"]: Pose;
										head: Pose;
									};
								};
								["Leg.L"]: Pose;
								["Leg.R"]: Pose;
							};
							["Tail.004_end"]: Pose;
							["Leg.L_end"]: Pose;
							Armature: Pose;
							["Leg.R_end"]: Pose;
							["Hand.L_end"]: Pose;
							["Hand.R_end"]: Pose;
							RootNode: Pose;
						};
					};
					["05_black_velo_dig"]: KeyframeSequence & {
						End: Keyframe & {
							head_end: Pose;
							Velociraptor: Pose & {
								Root: Pose & {
									Body: Pose & {
										["Hand.L"]: Pose;
										Tail: Pose & {
											["Tail.001"]: Pose & {
												["Tail.002"]: Pose & {
													["Tail.003"]: Pose & {
														["Tail.004"]: Pose;
													};
												};
											};
										};
										["Hand.R"]: Pose;
										head: Pose;
									};
								};
								["Leg.L"]: Pose;
								["Leg.R"]: Pose;
							};
							["Tail.004_end"]: Pose;
							["Leg.L_end"]: Pose;
							Armature: Pose;
							["Leg.R_end"]: Pose;
							["Hand.L_end"]: Pose;
							["Hand.R_end"]: Pose;
							RootNode: Pose;
						};
					};
				};
				["3_glyptodon"]: Folder & {
					["3_glyptodon_dig"]: KeyframeSequence & {
						End: Keyframe & {
							["BFoot.R_end.001_end"]: Pose;
							["FFoot.R_end"]: Pose;
							["FFoot.R_end.001_end"]: Pose;
							["BFoot.R_end_end"]: Pose;
							["FFoot.R_end.001"]: Pose;
							Glyptodon_3: Pose;
							["BFoot.R_end.001"]: Pose;
							["Glyptodon_3.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										BFoot_R: Pose;
										BFoot_L: Pose;
										Tail_01: Pose & {
											Tail_02: Pose & {
												Tail_03: Pose;
											};
										};
										FFoot_R: Pose;
										FFoot_L: Pose;
										Head: Pose;
									};
								};
							};
							Tail_03_end: Pose;
							Head_end: Pose;
							["BFoot.R_end"]: Pose;
							["FFoot.R_end_end"]: Pose;
							RootNode: Pose;
						};
					};
					["3_glyptodon_idle"]: KeyframeSequence & {
						End: Keyframe & {
							["BFoot.R_end.001_end"]: Pose;
							["FFoot.R_end"]: Pose;
							["FFoot.R_end.001_end"]: Pose;
							["BFoot.R_end_end"]: Pose;
							["FFoot.R_end.001"]: Pose;
							Glyptodon_3: Pose;
							["BFoot.R_end.001"]: Pose;
							["Glyptodon_3.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										BFoot_R: Pose;
										BFoot_L: Pose;
										Tail_01: Pose & {
											Tail_02: Pose & {
												Tail_03: Pose;
											};
										};
										FFoot_R: Pose;
										FFoot_L: Pose;
										Head: Pose;
									};
								};
							};
							Tail_03_end: Pose;
							Head_end: Pose;
							["BFoot.R_end"]: Pose;
							["FFoot.R_end_end"]: Pose;
							RootNode: Pose;
						};
					};
					["3_glyptodon_jump"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							["FFoot.R_end"]: Pose;
							["FFoot.R_end.001_end"]: Pose;
							["BFoot.R_end_end"]: Pose;
							Tail_03_end: Pose;
							Glyptodon_3: Pose;
							["BFoot.R_end.001_end"]: Pose;
							["Glyptodon_3.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										BFoot_R: Pose;
										BFoot_L: Pose;
										Tail_01: Pose & {
											Tail_02: Pose & {
												Tail_03: Pose;
											};
										};
										FFoot_R: Pose;
										FFoot_L: Pose;
										Head: Pose;
									};
								};
							};
							["BFoot.R_end.001"]: Pose;
							["FFoot.R_end.001"]: Pose;
							["BFoot.R_end"]: Pose;
							["FFoot.R_end_end"]: Pose;
							RootNode: Pose;
						};
					};
				};
				["18_spirit_bear"]: Folder & {
					["18_spirit_bear_idle"]: KeyframeSequence;
					["18_spirit_bear_jump"]: KeyframeSequence;
				};
				["09_stego"]: Folder & {
					["09_stego_jump"]: KeyframeSequence & {
						End: Keyframe & {
							["FFoot.R_end"]: Pose;
							["FFoot.L_end"]: Pose;
							Heat_end: Pose;
							["BFoot.L_end"]: Pose;
							Stegosaurus: Pose & {
								["FFoot.L"]: Pose;
								["BFoot.R"]: Pose;
								["BFoot.L"]: Pose;
								RootPart: Pose & {
									Body: Pose & {
										Neck: Pose & {
											Neck2: Pose & {
												Heat: Pose;
											};
										};
										Tail: Pose & {
											["Tail.001"]: Pose & {
												["Tail.002"]: Pose & {
													["Tail.004"]: Pose & {
														["Tail.005"]: Pose;
													};
												};
											};
										};
									};
								};
								["FFoot.R"]: Pose;
							};
							["Tail.005_end"]: Pose;
							["BFoot.R_end"]: Pose;
							Armature: Pose;
							RootNode: Pose;
						};
					};
					["09_stego_idle"]: KeyframeSequence;
					["09_stego_dig"]: KeyframeSequence & {
						End: Keyframe & {
							["FFoot.R_end"]: Pose;
							["FFoot.L_end"]: Pose;
							Heat_end: Pose;
							["BFoot.L_end"]: Pose;
							Stegosaurus: Pose & {
								["FFoot.L"]: Pose;
								["BFoot.R"]: Pose;
								["BFoot.L"]: Pose;
								RootPart: Pose & {
									Body: Pose & {
										Neck: Pose & {
											Neck2: Pose & {
												Heat: Pose;
											};
										};
										Tail: Pose & {
											["Tail.001"]: Pose & {
												["Tail.002"]: Pose & {
													["Tail.004"]: Pose & {
														["Tail.005"]: Pose;
													};
												};
											};
										};
									};
								};
								["FFoot.R"]: Pose;
							};
							["Tail.005_end"]: Pose;
							["BFoot.R_end"]: Pose;
							Armature: Pose;
							RootNode: Pose;
						};
					};
				};
				["11_scorpion"]: Folder & {
					["11_scorpion_idle"]: KeyframeSequence;
					["11_scorpion_jump"]: KeyframeSequence;
				};
				["19_spirit_owl"]: Folder & {
					["19_spirit_owl_idle"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							Spirit_Owl_19: Pose;
							Wing_end_R_end: Pose;
							Foot_end_R_end: Pose;
							Foot_end_R: Pose;
							Foot_end_L: Pose;
							Foot_end_L_end: Pose;
							["Spirit_Owl_19.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										Wing_L: Pose & {
											Wing_end_L: Pose;
										};
										Wing_R: Pose & {
											Wing_end_R: Pose;
										};
										Head: Pose;
										Foot_R: Pose;
										Foot_L: Pose;
									};
								};
							};
							Wing_end_L_end: Pose;
							RootNode: Pose;
						};
					};
					["19_spirit_owl_dig"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							Spirit_Owl_19: Pose;
							Wing_end_R_end: Pose;
							Foot_end_R_end: Pose;
							Foot_end_R: Pose;
							Foot_end_L: Pose;
							Foot_end_L_end: Pose;
							["Spirit_Owl_19.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										Wing_L: Pose & {
											Wing_end_L: Pose;
										};
										Wing_R: Pose & {
											Wing_end_R: Pose;
										};
										Head: Pose;
										Foot_R: Pose;
										Foot_L: Pose;
									};
								};
							};
							Wing_end_L_end: Pose;
							RootNode: Pose;
						};
					};
					["19_spirit_owl_jump"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							Spirit_Owl_19: Pose;
							Wing_end_R_end: Pose;
							Foot_end_R_end: Pose;
							Foot_end_R: Pose;
							Foot_end_L: Pose;
							Foot_end_L_end: Pose;
							["Spirit_Owl_19.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										Wing_L: Pose & {
											Wing_end_L: Pose;
										};
										Wing_R: Pose & {
											Wing_end_R: Pose;
										};
										Head: Pose;
										Foot_R: Pose;
										Foot_L: Pose;
									};
								};
							};
							Wing_end_L_end: Pose;
							RootNode: Pose;
						};
					};
				};
				["8_imagotaria"]: Folder & {
					["8_imagotaria_jump"]: KeyframeSequence;
					["8_imagotaria_idle"]: KeyframeSequence;
				};
				["15_stripped_owl"]: Folder & {
					["15_stripped_owl_dig"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							Hand_end_R_end: Pose;
							["ra_15.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										Foot_L: Pose;
										Hand_R: Pose;
										Head: Pose;
										Hand_L: Pose;
										Foot_R: Pose;
									};
								};
							};
							Foot_end_R: Pose;
							Foot_end_R_end: Pose;
							Hand_end_R: Pose;
							Foot_end_L_end: Pose;
							Foot_end_L: Pose;
							Hand_end_L_end: Pose;
							Hand_end_L: Pose;
							ra_15: Pose;
							RootNode: Pose;
						};
					};
					["15_stripped_owl_jump"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							Hand_end_R_end: Pose;
							["ra_15.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										Foot_L: Pose;
										Hand_R: Pose;
										Head: Pose;
										Hand_L: Pose;
										Foot_R: Pose;
									};
								};
							};
							Foot_end_R: Pose;
							Foot_end_R_end: Pose;
							Hand_end_R: Pose;
							Foot_end_L_end: Pose;
							Foot_end_L: Pose;
							Hand_end_L_end: Pose;
							Hand_end_L: Pose;
							ra_15: Pose;
							RootNode: Pose;
						};
					};
					["15_stripped_owl_idle"]: KeyframeSequence & {
						End: Keyframe & {
							Head_end: Pose;
							Hand_end_R_end: Pose;
							["ra_15.001"]: Pose & {
								RootPart: Pose & {
									Body: Pose & {
										Foot_L: Pose;
										Hand_R: Pose;
										Head: Pose;
										Hand_L: Pose;
										Foot_R: Pose;
									};
								};
							};
							Foot_end_R: Pose;
							Foot_end_R_end: Pose;
							Hand_end_R: Pose;
							Foot_end_L_end: Pose;
							Foot_end_L: Pose;
							Hand_end_L_end: Pose;
							Hand_end_L: Pose;
							ra_15: Pose;
							RootNode: Pose;
						};
					};
				};
				["9_guardian_crocodile"]: Folder & {
					["9_guardian_crocodile_jump"]: KeyframeSequence;
					["9_guardian_crocodile_idle"]: KeyframeSequence;
				};
			};
			["Open Me"]: Model & {
				["READ ME"]: Script;
				["R15 Anims"]: Model & {
					LeftLowerArm: MeshPart & {
						LeftElbowRigAttachment: Attachment;
						LeftElbow: Motor6D;
						LeftWristRigAttachment: Attachment;
					};
					LeftFoot: MeshPart & {
						LeftAnkleRigAttachment: Attachment;
						LeftAnkle: Motor6D;
					};
					AnimSaves: ObjectValue & {
						["Bone Break"]: KeyframeSequence & {
							DummyAnimationRigData: AnimationRigData;
						};
						Kick: KeyframeSequence & {
							DummyAnimationRigData: AnimationRigData;
						};
						["Automatic Save"]: KeyframeSequence & {
							["R15 AnimsAnimationRigData"]: AnimationRigData;
						};
						TestAnim: Animation;
						Punch: KeyframeSequence & {
							DummyAnimationRigData: AnimationRigData;
						};
						Run: KeyframeSequence;
						Walk: KeyframeSequence;
					};
					RightHand: MeshPart & {
						RightWristRigAttachment: Attachment;
						RightWrist: Motor6D;
						RightGripAttachment: Attachment;
					};
					HumanoidRootPart: Part & {
						RootRigAttachment: Attachment;
					};
					RightLowerLeg: MeshPart & {
						RightKneeRigAttachment: Attachment;
						RightAnkleRigAttachment: Attachment;
						RightKnee: Motor6D;
					};
					LeftUpperLeg: MeshPart & {
						LeftHip: Motor6D;
						LeftHipRigAttachment: Attachment;
						LeftKneeRigAttachment: Attachment;
					};
					LeftLowerLeg: MeshPart & {
						LeftKnee: Motor6D;
						LeftAnkleRigAttachment: Attachment;
						LeftKneeRigAttachment: Attachment;
					};
					LowerTorso: MeshPart & {
						WaistBackAttachment: Attachment;
						WaistCenterAttachment: Attachment;
						RootRigAttachment: Attachment;
						RightHipRigAttachment: Attachment;
						Root: Motor6D;
						WaistRigAttachment: Attachment;
						LeftHipRigAttachment: Attachment;
						WaistFrontAttachment: Attachment;
					};
					Head: Part & {
						Neck: Motor6D;
						HatAttachment: Attachment;
						FaceFrontAttachment: Attachment;
						NeckRigAttachment: Attachment;
						HairAttachment: Attachment;
						Mesh: SpecialMesh;
						FaceCenterAttachment: Attachment;
					};
					UpperTorso: MeshPart & {
						RightCollarAttachment: Attachment;
						BodyBackAttachment: Attachment;
						NeckRigAttachment: Attachment;
						LeftCollarAttachment: Attachment;
						Waist: Motor6D;
						RightShoulderRigAttachment: Attachment;
						BodyFrontAttachment: Attachment;
						WaistRigAttachment: Attachment;
						LeftShoulderRigAttachment: Attachment;
						NeckAttachment: Attachment;
					};
					LeftUpperArm: MeshPart & {
						LeftElbowRigAttachment: Attachment;
						LeftShoulderRigAttachment: Attachment;
						LeftShoulder: Motor6D;
						LeftShoulderAttachment: Attachment;
					};
					RightLowerArm: MeshPart & {
						RightWristRigAttachment: Attachment;
						RightElbow: Motor6D;
						RightElbowRigAttachment: Attachment;
					};
					LeftHand: MeshPart & {
						LeftWrist: Motor6D;
						LeftGripAttachment: Attachment;
						LeftWristRigAttachment: Attachment;
					};
					Humanoid: Humanoid & {
						Animator: Animator;
					};
					RightUpperArm: MeshPart & {
						RightShoulder: Motor6D;
						RightShoulderRigAttachment: Attachment;
						RightShoulderAttachment: Attachment;
						RightElbowRigAttachment: Attachment;
					};
					RightUpperLeg: MeshPart & {
						RightKneeRigAttachment: Attachment;
						RightHip: Motor6D;
						RightHipRigAttachment: Attachment;
					};
					RightFoot: MeshPart & {
						RightAnkle: Motor6D;
						RightAnkleRigAttachment: Attachment;
					};
				};
			};
			TestModels: Folder & {
				["Particle effects"]: Folder & {
					Other: Folder & {
						["A - POISON"]: Part & {
							POISON: ParticleEmitter;
						};
						["G - CHARGE"]: Part & {
							Middle: Attachment & {
								["Main Core"]: ParticleEmitter;
								Charge: ParticleEmitter;
								["Secondary Arcs"]: ParticleEmitter;
								["Primary Arcs"]: ParticleEmitter;
							};
						};
						["C - SHINY"]: Part & {
							Shine: ParticleEmitter;
							Glow: ParticleEmitter;
						};
						Ground1: Part & {
							Ground1: Attachment & {
								Ground: ParticleEmitter;
							};
						};
						pOISON: Part & {
							["Poison_Attachment2(*)"]: Attachment;
							["Poison_Attachment1(*)"]: Attachment & {
								backdrop: ParticleEmitter;
								["poison specks"]: ParticleEmitter;
							};
						};
						Slashes: Part & {
							Ground2: Attachment & {
								Swirl: ParticleEmitter;
							};
						};
						Aura: Part & {
							Aura_Attachment3: Attachment & {
								backAura: ParticleEmitter;
							};
							Aura_Attachment2: Attachment & {
								bot: ParticleEmitter;
							};
							Aura_Attachment: Attachment & {
								topAura: ParticleEmitter;
							};
						};
						["Magic Ting6"]: Part & {
							Ground2: Attachment & {
								Circle: ParticleEmitter;
								MagicCenter: ParticleEmitter;
							};
						};
						Block: Part & {
							["Block(*)"]: Attachment & {
								["Saprks (30)"]: ParticleEmitter;
								["CenterStar (30)"]: ParticleEmitter;
								["Radial(1)"]: ParticleEmitter;
							};
						};
						["J - ELECTRIC ORB"]: Part & {
							Middle: Attachment & {
								["Main Core"]: ParticleEmitter;
							};
							Sparks: ParticleEmitter;
						};
						["H - VENOM"]: Part & {
							Specks: ParticleEmitter;
							Venom: ParticleEmitter;
						};
						["MagicTing 8"]: Part & {
							Ground2: Attachment & {
								Fire: ParticleEmitter;
							};
						};
						["1"]: Part & {
							Part1: Attachment & {
								Swirl: ParticleEmitter;
								Charge: ParticleEmitter;
							};
						};
						["Heal Part (*)"]: Part & {
							["Healing Wave 1"]: ParticleEmitter;
							Attachment: Attachment & {
								Sparks: ParticleEmitter;
								["Star Sparks"]: ParticleEmitter;
							};
							["Healing Wave 2"]: ParticleEmitter;
						};
						Part: Part;
						["D - DEADLY GAS"]: Part & {
							SPECKS: ParticleEmitter;
							GAS: ParticleEmitter;
						};
						HitEff4: Part & {
							Release: Attachment;
							Attachment: Attachment & {
								vroom: ParticleEmitter;
								Hit: ParticleEmitter;
							};
						};
						["B - TREASURE"]: Part & {
							Middle: Attachment & {
								Core: ParticleEmitter;
								["Surrounding Aura"]: ParticleEmitter;
								["Singular Rays"]: ParticleEmitter;
							};
						};
						["K - HOLINESS"]: Part & {
							Middle: Attachment & {
								Core: ParticleEmitter;
								["Shining Circle"]: ParticleEmitter;
								["Singular Rays"]: ParticleEmitter;
							};
						};
						["Leveling Up (*)"]: Part & {
							Residues: ParticleEmitter;
							middleBeams: ParticleEmitter;
							LowerBeams: ParticleEmitter;
							Smoke: ParticleEmitter;
						};
						["I - SHOCK BUBBLE"]: Part & {
							Attachment: Attachment & {
								Bubble: ParticleEmitter;
								Bolts: ParticleEmitter;
							};
						};
						["L - POWER"]: Part & {
							Middle: Attachment & {
								["Main Core"]: ParticleEmitter;
								Charge: ParticleEmitter;
								Vortex: ParticleEmitter;
							};
						};
						["F - ORB"]: Part & {
							Middle: Attachment & {
								["Glowing Core"]: ParticleEmitter;
								["Dark Core"]: ParticleEmitter;
							};
						};
						["Perfect Block"]: Part & {
							["PerfectBlock(*)"]: Attachment & {
								["CenterStar (30)"]: ParticleEmitter;
								["Radial(1)"]: ParticleEmitter;
								["Saprks (30)"]: ParticleEmitter;
								["CenterWave (10)"]: ParticleEmitter;
								["CenterPiece (10)"]: ParticleEmitter;
							};
						};
						["E - GLOW"]: Part & {
							Middle: Attachment & {
								Rays: ParticleEmitter;
								["Glowing Core"]: ParticleEmitter;
							};
						};
						Ground2: Part & {
							Ground2: Attachment & {
								Ground: ParticleEmitter;
							};
						};
						["Magic Ting7"]: Part & {
							Ground2: Attachment & {
								Circle: ParticleEmitter;
								MagicCenter: ParticleEmitter;
							};
						};
					};
					Explosions: Folder & {
						Hit: Part & {
							Hit: Attachment & {
								["center ring (1)"]: ParticleEmitter;
								["center spark 3 (1)"]: ParticleEmitter;
								["center spark 2 (1)"]: ParticleEmitter;
								["sparks  (20)"]: ParticleEmitter;
							};
						};
						["01 - EXPLOSION [A]"]: Part & {
							MIDDLE: Attachment & {
								EXPLOSION04: ParticleEmitter;
								EXPLOSION02: ParticleEmitter;
								EXPLOSION03: ParticleEmitter;
								EXPLOSION01: ParticleEmitter;
							};
						};
						["02 - EXPLOSION [B]"]: Part & {
							MIDDLE: Attachment & {
								EXPLOSION04: ParticleEmitter;
								EXPLOSION02: ParticleEmitter;
								EXPLOSION03: ParticleEmitter;
								EXPLOSION01: ParticleEmitter;
							};
						};
						["Explosion (*)"]: Part & {
							Explosion: Attachment & {
								["Sparks (30)"]: ParticleEmitter;
								["BrightWave (5)"]: ParticleEmitter;
								["DarkWave (5)"]: ParticleEmitter;
							};
						};
					};
					Smoke: Folder & {
						["E - SMOKESCREEN [A]"]: Part & {
							SMOKE: ParticleEmitter;
						};
						["F - SMOKESCREEN [B]"]: Part & {
							SMOKE: ParticleEmitter;
						};
						["C - DARK SMOKE [A]"]: Part & {
							SMOKE: ParticleEmitter;
						};
						Part: Part;
						["D - DARK SMOKE [B]"]: Part & {
							SMOKE: ParticleEmitter;
						};
						["A - SMOKE [A]"]: Part & {
							SMOKE: ParticleEmitter;
						};
						["B - SMOKE [B]"]: Part & {
							SMOKE: ParticleEmitter;
						};
					};
					Blood: Folder & {
						HitEff3: Part & {
							splode: Attachment & {
								Shockwave: ParticleEmitter;
								Particle2: ParticleEmitter;
								he: ParticleEmitter;
							};
						};
						["D - POOLING BLOOD [A]"]: Part & {
							MIDDLE: Attachment & {
								BLOOD02: ParticleEmitter;
								BLOOD01: ParticleEmitter;
							};
						};
						["E - POOLING BLOOD [B]"]: Part & {
							MIDDLE: Attachment & {
								BLOOD01: ParticleEmitter;
							};
						};
						SwordHitEff2: Part & {
							Attachment: Attachment & {
								slash5: ParticleEmitter;
								BloodHit: ParticleEmitter;
							};
						};
						Part: Part;
						["C - BLOOD SPLATTER"]: Part & {
							MIDDLE: Attachment & {
								BLOOD02: ParticleEmitter;
								BLOOD01: ParticleEmitter;
							};
						};
						["B - HEMORRHAGE"]: Part & {
							MIDDLE: Attachment & {
								BLOOD02: ParticleEmitter;
								BLOOD01: ParticleEmitter;
							};
						};
						["A - SUDDEN WOUND"]: Part & {
							MIDDLE: Attachment & {
								BLOOD03: ParticleEmitter;
								BLOOD02: ParticleEmitter;
								BLOOD01: ParticleEmitter;
							};
						};
					};
					Water: Folder & {
						["B - WATER SPRAY"]: Part & {
							MIDDLE: Attachment & {
								["MAIN SPRAY"]: ParticleEmitter;
							};
							["WATER SPRAY"]: ParticleEmitter;
						};
						["D - BROKEN PIPE"]: Part & {
							MIDDLE: Attachment & {
								["MAIN SPRAY"]: ParticleEmitter;
							};
							["WATER SPRAY"]: ParticleEmitter;
						};
						["F - RAIN, POUR"]: Part & {
							RAIN: ParticleEmitter;
						};
						["A - STEADY RIPPLE"]: Part & {
							RIPPLE: ParticleEmitter;
						};
						["E - STEAM"]: Part & {
							MIDDLE: Attachment & {
								FWSSHHH: ParticleEmitter;
							};
						};
						["C - STRONG WATER SPRAY"]: Part & {
							MIDDLE: Attachment & {
								["MAIN SPRAY"]: ParticleEmitter;
							};
							["WATER SPRAY"]: ParticleEmitter;
						};
						Part: Part;
						["F- RAIN, SPLASH"]: Part & {
							RIPPLE: ParticleEmitter;
							SPLASH: ParticleEmitter;
						};
					};
					Lightning: Folder & {
						["B - ELECTRICITY 02"]: Part & {
							ELECTRIC: ParticleEmitter;
						};
						["G - LIGHTNING BOLT 01"]: Part & {
							MIDDLE: Attachment & {
								ELECTRIC: ParticleEmitter;
							};
						};
						["F - ELECTRICITY 06"]: Part & {
							MIDDLE: Attachment & {
								ELECTRIC: ParticleEmitter;
							};
						};
						Part: Part;
						["H - LIGHTNING BOLT 02"]: Part & {
							MIDDLE: Attachment & {
								ELECTRIC: ParticleEmitter;
							};
						};
						["A - ELECTRICITY 01"]: Part & {
							ELECTRIC: ParticleEmitter;
						};
						["06 - LIGHTNING STRIKE [B]"]: Part & {
							RESIDUE: ParticleEmitter;
							LIGHTNING: Attachment & {
								ELECTRIC: ParticleEmitter;
							};
						};
						["C - ELECTRICITY 03"]: Part & {
							ELECTRIC: ParticleEmitter;
						};
						["E - ELECTRICITY 05"]: Part & {
							ELECTRIC: ParticleEmitter;
						};
						["I - ELECTRIC BURST"]: Part & {
							MIDDLE: Attachment & {
								ELECTRIC: ParticleEmitter;
							};
						};
						["05 - LIGHTNING STRIKE [A]"]: Part & {
							RESIDUE: ParticleEmitter;
							LIGHTNING: Attachment & {
								ELECTRIC: ParticleEmitter;
							};
						};
						["D - ELECTRICITY 04"]: Part & {
							ELECTRIC: ParticleEmitter;
						};
					};
					Slashes: Folder & {
						["F - ARC SLASHES 02"]: Part & {
							CUTS: ParticleEmitter;
						};
						SwordBarrageEff: Part & {
							Wind: Attachment;
							Main: Attachment;
							MiscEffects: Attachment & {
								Lines: ParticleEmitter;
							};
						};
						["E - ARC SLASHES 01"]: Part & {
							CUTS: ParticleEmitter;
						};
						Part: Part;
						["A - CUTS 01"]: Part & {
							CUTS: ParticleEmitter;
						};
						["B - SLASHES 01"]: Part & {
							CUTS: ParticleEmitter;
						};
						["D - MULTIPLE SLASHES"]: Part & {
							CUTS: ParticleEmitter;
						};
						["C - SLASH STRIKE"]: Part & {
							CUTS: ParticleEmitter;
						};
						SwordHitEff1: Part & {
							Attachment: Attachment & {
								BloodHit: ParticleEmitter;
							};
						};
					};
					BlackHoles: Folder & {
						["04 - BLACK HOLE [B]"]: Part & {
							MIDDLE: Attachment & {
								VOID: ParticleEmitter;
								["CREEPING DARK"]: ParticleEmitter;
								["CORE RING"]: ParticleEmitter;
								ABYSS: ParticleEmitter;
								CORE: ParticleEmitter;
							};
						};
						["03 - BLACK HOLE [A]"]: Part & {
							MIDDLE: Attachment & {
								CORE: ParticleEmitter;
								["OUTER RING"]: ParticleEmitter;
								["EVENT HORIZON 01"]: ParticleEmitter;
								["CORE RING"]: ParticleEmitter;
								["EVENT HORIZON 03"]: ParticleEmitter;
								["EVENT HORIZON 02"]: ParticleEmitter;
							};
						};
					};
					Fire: Folder & {
						["Magic Ting4"]: Part & {
							Ground2: Attachment & {
								Fire: ParticleEmitter;
							};
						};
						["D - ROARING FLAMES"]: Part & {
							SPECKS: ParticleEmitter;
							FIRE: ParticleEmitter;
							GLOW: ParticleEmitter;
						};
						Part: Part;
						Burn: Part & {
							Sparks: ParticleEmitter;
							Fire: ParticleEmitter;
						};
						["A - CANDLELIGHT"]: Part & {
							MIDDLE: Attachment & {
								GLOW: ParticleEmitter;
								CANDLELIGHT: ParticleEmitter;
							};
						};
						["F - RAGING PILLAR"]: Part & {
							FLAMEPILLAR: ParticleEmitter;
							GLOW: ParticleEmitter;
							SPECKS: ParticleEmitter;
							SPIKES: ParticleEmitter;
						};
						["E - FLOOR FLAMES"]: Part & {
							SPECKS: ParticleEmitter;
							["BURNING FLOOR"]: ParticleEmitter;
							FLAMES: ParticleEmitter;
							GLOW: ParticleEmitter;
						};
						["C - STRONG FIRE"]: Part & {
							SPECKS: ParticleEmitter;
							FIRE: ParticleEmitter;
							GLOW: ParticleEmitter;
						};
						["Magic Ting3"]: Part & {
							Ground2: Attachment & {
								Fire: ParticleEmitter;
							};
						};
						["B - FLAMES"]: Part & {
							SPECKS: ParticleEmitter;
							FIRE: ParticleEmitter;
							GLOW: ParticleEmitter;
						};
						["Magic Ting2"]: Part & {
							Ground2: Attachment & {
								Fire: ParticleEmitter;
							};
						};
					};
					Portals: Folder & {
						["07 - PORTAL [A]"]: Part & {
							MIDDLE: Attachment & {
								FIELD: ParticleEmitter;
								CORE: ParticleEmitter;
								AURA: ParticleEmitter;
							};
						};
						["08 - PORTAL [B]"]: Part & {
							MIDDLE: Attachment & {
								CORE: ParticleEmitter;
								NEBULAIC: ParticleEmitter;
								COLOR: ParticleEmitter;
								AURA: ParticleEmitter;
								STARS: ParticleEmitter;
							};
						};
						["Magic Ting5"]: Part & {
							Ground2: Attachment & {
								Swirl: ParticleEmitter;
							};
						};
						Part: Part;
						Lvlup: Part & {
							Wave2: ParticleEmitter;
							Ground: Attachment & {
								["Ground Radial Effect"]: ParticleEmitter;
							};
							Sparks: ParticleEmitter;
							Wave1: ParticleEmitter;
						};
						["2"]: Part & {
							Particles: Attachment & {
								Smoke: ParticleEmitter;
							};
							Part2: Attachment & {
								Fire: ParticleEmitter;
							};
						};
						BlockBreak: Part & {
							BlockBreak: Attachment & {
								["Saprks (30)"]: ParticleEmitter;
								["Crack(1)"]: ParticleEmitter;
								["CenterPiece (3)"]: ParticleEmitter;
								["Radial(1)"]: ParticleEmitter;
							};
						};
					};
					Hits: Folder & {
						["A - NORMAL STRIKE [A]"]: Part & {
							MIDDLE: Attachment & {
								CIRCLE: ParticleEmitter;
								HIT: ParticleEmitter;
							};
						};
						HitEffect: Part & {
							Ground2: Attachment & {
								Beams: ParticleEmitter;
								Center2: ParticleEmitter;
								Circle: ParticleEmitter;
								Traces: ParticleEmitter;
								Center1: ParticleEmitter;
							};
						};
						["C - NORMAL STRIKE [C]"]: Part & {
							MIDDLE: Attachment & {
								STRIKES: ParticleEmitter;
							};
						};
						["D - QUICKSTEP"]: Part & {
							FWOOSH: ParticleEmitter;
						};
						HitEff2: Part & {
							Attachment: Attachment;
						};
						["B - NORMAL STRIKE [B]"]: Part & {
							MIDDLE: Attachment & {
								STRIKES: ParticleEmitter;
							};
						};
						BlockEff: Part & {
							Hit: ParticleEmitter;
						};
						HitEff: Part & {
							Attachment: Attachment & {
								HITPE: ParticleEmitter;
								Folder: Folder;
								ParticleEmitter: ParticleEmitter;
							};
						};
						["E -  FAST TRAVEL"]: Part & {
							LINES: ParticleEmitter;
							FWOOSH: ParticleEmitter;
						};
						Part: Part;
					};
				};
				models: Folder & {
					MagnetFlag: MeshPart;
					Coin: MeshPart & {
						Decal1: Decal;
						Decal2: Decal;
					};
					tntcrate: Part;
					moneybag: Part & {
						Mesh: SpecialMesh;
						Weld: Weld;
					};
					CoinsFlag: MeshPart;
					jar: Model;
				};
				pets_anim: Folder & {
					test_plate: Part;
					skel_bracho: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						AnimSaves: ObjectValue & {
							["Branchiosaurus Idle"]: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									["FFoot.R_end"]: Pose;
									BrachiosaurusEsq: Pose;
									["BFoot.L_end"]: Pose;
									Bone: Pose & {
										["FFoot.L"]: Pose;
										["BFoot.R"]: Pose;
										["BFoot.L"]: Pose;
										RootPart: Pose & {
											Body: Pose & {
												neck: Pose & {
													["neck.001"]: Pose & {
														["neck.002"]: Pose & {
															["neck.003"]: Pose & {
																["neck.004"]: Pose & {
																	["neck.005"]: Pose & {
																		["neck.006"]: Pose & {
																			["neck.007"]: Pose & {
																				Head: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
												Tail1: Pose & {
													Tail2: Pose & {
														Tail3: Pose & {
															Tail4: Pose & {
																Tail5: Pose & {
																	Tail6: Pose & {
																		Tail7: Pose & {
																			Tail8: Pose & {
																				Tail9: Pose & {
																					Tail10: Pose & {
																						Tail11: Pose;
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
										["FFoot.R"]: Pose;
									};
									RootNode: Pose;
									["BFoot.R_end"]: Pose;
									["FFoot.L_end"]: Pose;
									Tail11_end: Pose;
								};
							};
							["Branchiosaurus Walk"]: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									["FFoot.R_end"]: Pose;
									BrachiosaurusEsq: Pose;
									["BFoot.L_end"]: Pose;
									Bone: Pose & {
										["FFoot.L"]: Pose;
										["BFoot.R"]: Pose;
										["BFoot.L"]: Pose;
										RootPart: Pose & {
											Body: Pose & {
												neck: Pose & {
													["neck.001"]: Pose & {
														["neck.002"]: Pose & {
															["neck.003"]: Pose & {
																["neck.004"]: Pose & {
																	["neck.005"]: Pose & {
																		["neck.006"]: Pose & {
																			["neck.007"]: Pose & {
																				Head: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
												Tail1: Pose & {
													Tail2: Pose & {
														Tail3: Pose & {
															Tail4: Pose & {
																Tail5: Pose & {
																	Tail6: Pose & {
																		Tail7: Pose & {
																			Tail8: Pose & {
																				Tail9: Pose & {
																					Tail10: Pose & {
																						Tail11: Pose;
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
										["FFoot.R"]: Pose;
									};
									RootNode: Pose;
									["BFoot.R_end"]: Pose;
									["FFoot.L_end"]: Pose;
									Tail11_end: Pose;
								};
							};
							["Branchiosaurus Dig"]: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									["FFoot.R_end"]: Pose;
									BrachiosaurusEsq: Pose;
									["BFoot.L_end"]: Pose;
									Bone: Pose & {
										["FFoot.L"]: Pose;
										["BFoot.R"]: Pose;
										["BFoot.L"]: Pose;
										RootPart: Pose & {
											Body: Pose & {
												neck: Pose & {
													["neck.001"]: Pose & {
														["neck.002"]: Pose & {
															["neck.003"]: Pose & {
																["neck.004"]: Pose & {
																	["neck.005"]: Pose & {
																		["neck.006"]: Pose & {
																			["neck.007"]: Pose & {
																				Head: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
												Tail1: Pose & {
													Tail2: Pose & {
														Tail3: Pose & {
															Tail4: Pose & {
																Tail5: Pose & {
																	Tail6: Pose & {
																		Tail7: Pose & {
																			Tail8: Pose & {
																				Tail9: Pose & {
																					Tail10: Pose & {
																						Tail11: Pose;
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
										["FFoot.R"]: Pose;
									};
									RootNode: Pose;
									["BFoot.R_end"]: Pose;
									["FFoot.L_end"]: Pose;
									Tail11_end: Pose;
								};
							};
						};
						InitialPoses: Folder & {
							Head_Original: CFrameValue;
							Tail10_Composited: CFrameValue;
							["FFoot.L_end_Original"]: CFrameValue;
							Tail11_Composited: CFrameValue;
							Tail1_Composited: CFrameValue;
							Tail8_Original: CFrameValue;
							Tail1_Initial: CFrameValue;
							neck_Composited: CFrameValue;
							Tail6_Composited: CFrameValue;
							["neck.005_Composited"]: CFrameValue;
							["neck.003_Composited"]: CFrameValue;
							["neck.004_Original"]: CFrameValue;
							Tail8_Initial: CFrameValue;
							Tail10_Initial: CFrameValue;
							Head_Initial: CFrameValue;
							Tail10_Original: CFrameValue;
							["BFoot.R_end_Initial"]: CFrameValue;
							["BFoot.R_end_Original"]: CFrameValue;
							["neck.005_Initial"]: CFrameValue;
							["BFoot.R_end_Composited"]: CFrameValue;
							["BFoot.R_Initial"]: CFrameValue;
							Tail11_end_Original: CFrameValue;
							Tail4_Composited: CFrameValue;
							Tail6_Initial: CFrameValue;
							Tail9_Initial: CFrameValue;
							["neck.002_Composited"]: CFrameValue;
							Tail3_Composited: CFrameValue;
							Tail3_Original: CFrameValue;
							["BFoot.R_Original"]: CFrameValue;
							Tail5_Composited: CFrameValue;
							["FFoot.R_end_Initial"]: CFrameValue;
							["FFoot.R_end_Original"]: CFrameValue;
							["BFoot.L_Initial"]: CFrameValue;
							Tail3_Initial: CFrameValue;
							["FFoot.R_Initial"]: CFrameValue;
							["FFoot.R_Original"]: CFrameValue;
							["FFoot.R_Composited"]: CFrameValue;
							Tail7_Composited: CFrameValue;
							["FFoot.L_end_Composited"]: CFrameValue;
							["FFoot.L_Original"]: CFrameValue;
							["BFoot.L_end_Original"]: CFrameValue;
							["neck.001_Initial"]: CFrameValue;
							Body_Original: CFrameValue;
							["BFoot.L_Original"]: CFrameValue;
							["BFoot.L_end_Composited"]: CFrameValue;
							["neck.002_Original"]: CFrameValue;
							["neck.006_Composited"]: CFrameValue;
							["FFoot.R_end_Composited"]: CFrameValue;
							["BFoot.L_Composited"]: CFrameValue;
							Tail11_end_Composited: CFrameValue;
							["neck.001_Composited"]: CFrameValue;
							Tail9_Composited: CFrameValue;
							["FFoot.L_Composited"]: CFrameValue;
							Body_Composited: CFrameValue;
							["BFoot.L_end_Initial"]: CFrameValue;
							["FFoot.L_Initial"]: CFrameValue;
							Tail5_Original: CFrameValue;
							["neck.007_Composited"]: CFrameValue;
							["FFoot.L_end_Initial"]: CFrameValue;
							Head_end_Initial: CFrameValue;
							Bone_Original: CFrameValue;
							Bone_Initial: CFrameValue;
							Head_end_Original: CFrameValue;
							Head_end_Composited: CFrameValue;
							["neck.003_Initial"]: CFrameValue;
							Tail11_Original: CFrameValue;
							Tail11_end_Initial: CFrameValue;
							Tail9_Original: CFrameValue;
							["neck.004_Initial"]: CFrameValue;
							Tail4_Original: CFrameValue;
							Head_Composited: CFrameValue;
							neck_Original: CFrameValue;
							Tail11_Initial: CFrameValue;
							BrachiosaurusEsq_Original: CFrameValue;
							["neck.007_Initial"]: CFrameValue;
							Tail2_Composited: CFrameValue;
							Tail6_Original: CFrameValue;
							["neck.004_Composited"]: CFrameValue;
							["neck.006_Initial"]: CFrameValue;
							RootPart_Initial: CFrameValue;
							Tail7_Original: CFrameValue;
							["neck.003_Original"]: CFrameValue;
							Tail5_Initial: CFrameValue;
							["neck.005_Original"]: CFrameValue;
							["neck.006_Original"]: CFrameValue;
							["neck.007_Original"]: CFrameValue;
							Tail7_Initial: CFrameValue;
							["neck.002_Initial"]: CFrameValue;
							RootPart_Original: CFrameValue;
							Body_Initial: CFrameValue;
							Tail2_Initial: CFrameValue;
							BrachiosaurusEsq_Initial: CFrameValue;
							["neck.001_Original"]: CFrameValue;
							Bone_Composited: CFrameValue;
							Tail8_Composited: CFrameValue;
							Tail1_Original: CFrameValue;
							RootPart_Composited: CFrameValue;
							BrachiosaurusEsq_Composited: CFrameValue;
							Tail4_Initial: CFrameValue;
							neck_Initial: CFrameValue;
							Tail2_Original: CFrameValue;
							["BFoot.R_Composited"]: CFrameValue;
						};
						Bone: MeshPart & {
							["FFoot.L"]: Bone;
							["BFoot.R"]: Bone;
							["BFoot.L"]: Bone;
							RootPart: Bone & {
								Body: Bone & {
									neck: Bone & {
										["neck.001"]: Bone & {
											["neck.002"]: Bone & {
												["neck.003"]: Bone & {
													["neck.004"]: Bone & {
														["neck.005"]: Bone & {
															["neck.006"]: Bone & {
																["neck.007"]: Bone & {
																	Head: Bone;
																};
															};
														};
													};
												};
											};
										};
									};
									Tail1: Bone & {
										Tail2: Bone & {
											Tail3: Bone & {
												Tail4: Bone & {
													Tail5: Bone & {
														Tail6: Bone & {
															Tail7: Bone & {
																Tail8: Bone & {
																	Tail9: Bone & {
																		Tail10: Bone & {
																			Tail11: Bone;
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
							["FFoot.R"]: Bone;
						};
					};
					magnetflag: MeshPart;
					dodo: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						Body2: MeshPart & {
							["Foot.R"]: Bone;
							RootPart: Bone & {
								Body: Bone & {
									["wing.R"]: Bone;
									tail: Bone;
									["wing.L"]: Bone;
									Head: Bone & {
										feather: Bone;
									};
								};
							};
							["Foot.L"]: Bone;
						};
						InitialPoses: Folder & {
							Head_Original: CFrameValue;
							tail_Original: CFrameValue;
							Body_Original: CFrameValue;
							Esqueleto_Original: CFrameValue;
							feather_Original: CFrameValue;
							Dodo_Composited: CFrameValue;
							RootPart_Original: CFrameValue;
							Body_Composited: CFrameValue;
							Dodo_Original: CFrameValue;
							["Foot.R_end_Composited"]: CFrameValue;
							["wing.R_end_Composited"]: CFrameValue;
							["Foot.R_Initial"]: CFrameValue;
							["wing.L_Composited"]: CFrameValue;
							tail_end_Original: CFrameValue;
							["Foot.R_end_Initial"]: CFrameValue;
							RootPart_Composited: CFrameValue;
							["Foot.R_end_Original"]: CFrameValue;
							["wing.L_end_Initial"]: CFrameValue;
							feather_Initial: CFrameValue;
							["Foot.R_Original"]: CFrameValue;
							["Foot.R_Composited"]: CFrameValue;
							["Foot.L_end_Initial"]: CFrameValue;
							tail_end_Initial: CFrameValue;
							Dodo_Initial: CFrameValue;
							feather_end_Composited: CFrameValue;
							Esqueleto_Initial: CFrameValue;
							Head_Initial: CFrameValue;
							["Foot.L_Initial"]: CFrameValue;
							tail_Composited: CFrameValue;
							["wing.L_end_Composited"]: CFrameValue;
							feather_Composited: CFrameValue;
							["Foot.L_end_Original"]: CFrameValue;
							Esqueleto_Composited: CFrameValue;
							["Foot.L_Original"]: CFrameValue;
							["Foot.L_Composited"]: CFrameValue;
							["wing.R_end_Initial"]: CFrameValue;
							["wing.R_Original"]: CFrameValue;
							["wing.R_end_Original"]: CFrameValue;
							tail_Initial: CFrameValue;
							Head_Composited: CFrameValue;
							Body_Initial: CFrameValue;
							feather_end_Original: CFrameValue;
							RootPart_Initial: CFrameValue;
							["wing.R_Composited"]: CFrameValue;
							["wing.L_end_Original"]: CFrameValue;
							["Foot.L_end_Composited"]: CFrameValue;
							["wing.R_Initial"]: CFrameValue;
							["wing.L_Initial"]: CFrameValue;
							["wing.L_Original"]: CFrameValue;
							tail_end_Composited: CFrameValue;
							feather_end_Initial: CFrameValue;
						};
						AnimSaves: ObjectValue & {
							["Dodo Dig"]: KeyframeSequence & {
								End: Keyframe & {
									Esqueleto: Pose;
									["Foot.L_end"]: Pose;
									["Foot.R_end"]: Pose;
									Dodo: Pose & {
										["Foot.R"]: Pose;
										RootPart: Pose & {
											Body: Pose & {
												["wing.L"]: Pose;
												tail: Pose;
												["wing.R"]: Pose;
												Head: Pose & {
													feather: Pose;
												};
											};
										};
										["Foot.L"]: Pose;
									};
									feather_end: Pose;
									["wing.L_end"]: Pose;
									tail_end: Pose;
									["wing.R_end"]: Pose;
									RootNode: Pose;
								};
							};
							["Dodo Walk"]: KeyframeSequence & {
								End: Keyframe & {
									Esqueleto: Pose;
									["Foot.L_end"]: Pose;
									["Foot.R_end"]: Pose;
									Dodo: Pose & {
										["Foot.R"]: Pose;
										RootPart: Pose & {
											Body: Pose & {
												["wing.L"]: Pose;
												tail: Pose;
												["wing.R"]: Pose;
												Head: Pose & {
													feather: Pose;
												};
											};
										};
										["Foot.L"]: Pose;
									};
									feather_end: Pose;
									["wing.L_end"]: Pose;
									tail_end: Pose;
									["wing.R_end"]: Pose;
									RootNode: Pose;
								};
							};
							["Dodo Idle"]: KeyframeSequence & {
								End: Keyframe & {
									Esqueleto: Pose;
									["Foot.L_end"]: Pose;
									["Foot.R_end"]: Pose;
									Dodo: Pose & {
										["Foot.R"]: Pose;
										RootPart: Pose & {
											Body: Pose & {
												["wing.L"]: Pose;
												tail: Pose;
												["wing.R"]: Pose;
												Head: Pose & {
													feather: Pose;
												};
											};
										};
										["Foot.L"]: Pose;
									};
									feather_end: Pose;
									["wing.L_end"]: Pose;
									tail_end: Pose;
									["wing.R_end"]: Pose;
									RootNode: Pose;
								};
							};
						};
					};
					trex: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						Body_low: MeshPart & {
							Root: Bone & {
								Body: Bone & {
									head: Bone;
									Tail: Bone & {
										["Tail.001"]: Bone & {
											["Tail.002"]: Bone & {
												["Tail.003"]: Bone & {
													["Tail.004"]: Bone & {
														["Tail.005"]: Bone;
													};
												};
											};
										};
									};
									["Hand.L"]: Bone;
									["Hand.R"]: Bone;
								};
							};
							["Leg.L"]: Bone;
							["Leg.R"]: Bone;
						};
						InitialPoses: Folder & {
							["Leg.R_Composited"]: CFrameValue;
							["Hand.L_Original"]: CFrameValue;
							Body_low_Initial: CFrameValue;
							Body_Original: CFrameValue;
							["Tail.001_Original"]: CFrameValue;
							Body_low_Original: CFrameValue;
							head_Initial: CFrameValue;
							Armature_Initial: CFrameValue;
							["Tail.003_Initial"]: CFrameValue;
							["Tail.005_end_Original"]: CFrameValue;
							Body_low_Composited: CFrameValue;
							["Leg.R_end_Initial"]: CFrameValue;
							["Leg.R_end_Original"]: CFrameValue;
							["Hand.R_end_Original"]: CFrameValue;
							Body_Composited: CFrameValue;
							Armature_Original: CFrameValue;
							["Leg.L_end_Original"]: CFrameValue;
							["Leg.R_end_Composited"]: CFrameValue;
							Tail_Initial: CFrameValue;
							head_Composited: CFrameValue;
							["Hand.L_end_Initial"]: CFrameValue;
							["Hand.R_Initial"]: CFrameValue;
							["Tail.001_Composited"]: CFrameValue;
							["Leg.R_Original"]: CFrameValue;
							["Leg.L_Initial"]: CFrameValue;
							["Leg.L_end_Composited"]: CFrameValue;
							head_end_Initial: CFrameValue;
							["Leg.L_end_Initial"]: CFrameValue;
							["Leg.L_Original"]: CFrameValue;
							["Leg.L_Composited"]: CFrameValue;
							head_end_Original: CFrameValue;
							head_Original: CFrameValue;
							Tail_Original: CFrameValue;
							["Hand.R_end_Composited"]: CFrameValue;
							["Leg.R_Initial"]: CFrameValue;
							Root_Original: CFrameValue;
							["Tail.005_Composited"]: CFrameValue;
							["Hand.L_end_Composited"]: CFrameValue;
							["Hand.L_Initial"]: CFrameValue;
							["Tail.005_Original"]: CFrameValue;
							["Tail.003_Original"]: CFrameValue;
							Tail_Composited: CFrameValue;
							["Tail.002_Original"]: CFrameValue;
							["Tail.003_Composited"]: CFrameValue;
							head_end_Composited: CFrameValue;
							["Tail.004_Composited"]: CFrameValue;
							["Tail.002_Composited"]: CFrameValue;
							["Hand.R_Composited"]: CFrameValue;
							["Hand.L_Composited"]: CFrameValue;
							Root_Initial: CFrameValue;
							["Tail.005_end_Composited"]: CFrameValue;
							["Tail.005_Initial"]: CFrameValue;
							Body_Initial: CFrameValue;
							["Hand.R_end_Initial"]: CFrameValue;
							Armature_Composited: CFrameValue;
							["Tail.001_Initial"]: CFrameValue;
							["Tail.004_Original"]: CFrameValue;
							["Tail.005_end_Initial"]: CFrameValue;
							["Hand.L_end_Original"]: CFrameValue;
							["Tail.004_Initial"]: CFrameValue;
							Root_Composited: CFrameValue;
							["Hand.R_Original"]: CFrameValue;
							["Tail.002_Initial"]: CFrameValue;
						};
						AnimSaves: Model & {
							["TRex Walk"]: KeyframeSequence & {
								End: Keyframe & {
									head_end: Pose;
									["Leg.R_end"]: Pose;
									Body_low: Pose & {
										Root: Pose & {
											Body: Pose & {
												["Hand.L"]: Pose;
												Tail: Pose & {
													["Tail.001"]: Pose & {
														["Tail.002"]: Pose & {
															["Tail.003"]: Pose & {
																["Tail.004"]: Pose & {
																	["Tail.005"]: Pose;
																};
															};
														};
													};
												};
												head: Pose;
												["Hand.R"]: Pose;
											};
										};
										["Leg.L"]: Pose;
										["Leg.R"]: Pose;
									};
									["Leg.L_end"]: Pose;
									Armature: Pose;
									["Tail.005_end"]: Pose;
									["Hand.R_end"]: Pose;
									["Hand.L_end"]: Pose;
									RootNode: Pose;
								};
							};
							["TRex Dig"]: KeyframeSequence & {
								End: Keyframe & {
									head_end: Pose;
									["Leg.R_end"]: Pose;
									Body_low: Pose & {
										Root: Pose & {
											Body: Pose & {
												["Hand.L"]: Pose;
												Tail: Pose & {
													["Tail.001"]: Pose & {
														["Tail.002"]: Pose & {
															["Tail.003"]: Pose & {
																["Tail.004"]: Pose & {
																	["Tail.005"]: Pose;
																};
															};
														};
													};
												};
												head: Pose;
												["Hand.R"]: Pose;
											};
										};
										["Leg.L"]: Pose;
										["Leg.R"]: Pose;
									};
									["Leg.L_end"]: Pose;
									Armature: Pose;
									["Tail.005_end"]: Pose;
									["Hand.R_end"]: Pose;
									["Hand.L_end"]: Pose;
									RootNode: Pose;
								};
							};
							["TRex Idle"]: KeyframeSequence & {
								End: Keyframe & {
									head_end: Pose;
									["Leg.R_end"]: Pose;
									Body_low: Pose & {
										Root: Pose & {
											Body: Pose & {
												["Hand.L"]: Pose;
												Tail: Pose & {
													["Tail.001"]: Pose & {
														["Tail.002"]: Pose & {
															["Tail.003"]: Pose & {
																["Tail.004"]: Pose & {
																	["Tail.005"]: Pose;
																};
															};
														};
													};
												};
												head: Pose;
												["Hand.R"]: Pose;
											};
										};
										["Leg.L"]: Pose;
										["Leg.R"]: Pose;
									};
									["Leg.L_end"]: Pose;
									Armature: Pose;
									["Tail.005_end"]: Pose;
									["Hand.R_end"]: Pose;
									["Hand.L_end"]: Pose;
									RootNode: Pose;
								};
							};
						};
					};
					skel_dino: Model & {
						Pterodactyl_Esq: MeshPart & {
							["Foot.R"]: Bone;
							RootPart: Bone & {
								Body: Bone & {
									["wingP1.R"]: Bone & {
										["wingP2.R"]: Bone & {
											["wingP3.R"]: Bone & {
												["wingP4.R"]: Bone & {
													["wingP5.R"]: Bone & {
														["wingP6.R"]: Bone & {
															["wingP7.R"]: Bone & {
																["wingP8.R"]: Bone & {
																	["wingP9.R"]: Bone;
																};
															};
														};
													};
												};
											};
										};
									};
									Heat: Bone;
									["wingP1.L"]: Bone & {
										["wingP2.L"]: Bone & {
											["wingP3.L"]: Bone & {
												["wingP4.L"]: Bone & {
													["wingP5.L"]: Bone & {
														["wingP6.L"]: Bone & {
															["wingP7.L"]: Bone & {
																["wingP8.L"]: Bone & {
																	["wingP9.L"]: Bone;
																};
															};
														};
													};
												};
											};
										};
									};
									Tail1: Bone & {
										Tail2: Bone & {
											Tail3: Bone & {
												Tail4: Bone;
											};
										};
									};
								};
							};
							["Foot.L"]: Bone;
						};
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						InitialPoses: Folder & {
							["wingP8.L_Initial"]: CFrameValue;
							["wingP5.L_Composited"]: CFrameValue;
							["wingP4.R_Composited"]: CFrameValue;
							Heat_end_Original: CFrameValue;
							Heat_end_Initial: CFrameValue;
							RootPart_Original: CFrameValue;
							Tail1_Composited: CFrameValue;
							["wingP6.L_Initial"]: CFrameValue;
							["wingP9.R_end_Original"]: CFrameValue;
							["wingP9.R_Original"]: CFrameValue;
							["wingP9.R_Composited"]: CFrameValue;
							["wingP9.R_end_Composited"]: CFrameValue;
							Tail1_Original: CFrameValue;
							["wingP2.L_Original"]: CFrameValue;
							["wingP6.R_Original"]: CFrameValue;
							["wingP9.R_Initial"]: CFrameValue;
							["wingP3.L_Initial"]: CFrameValue;
							["wingP3.R_Initial"]: CFrameValue;
							["wingP5.R_Composited"]: CFrameValue;
							["wingP4.L_Initial"]: CFrameValue;
							Pterodactyl_Esq_Initial: CFrameValue;
							["wingP2.L_Initial"]: CFrameValue;
							["wingP9.L_end_Original"]: CFrameValue;
							["wingP2.R_Composited"]: CFrameValue;
							["wingP5.R_Initial"]: CFrameValue;
							Tail4_Composited: CFrameValue;
							Tail4_end_Composited: CFrameValue;
							Heat_Original: CFrameValue;
							PterodactylEsq_Original: CFrameValue;
							Tail3_Composited: CFrameValue;
							Body_Initial: CFrameValue;
							["wingP1.R_Composited"]: CFrameValue;
							Pterodactyl_Esq_Original: CFrameValue;
							["wingP1.L_Composited"]: CFrameValue;
							["Foot.R_end_Initial"]: CFrameValue;
							["wingP9.L_Original"]: CFrameValue;
							Tail3_Initial: CFrameValue;
							["Foot.R_end_Original"]: CFrameValue;
							["Foot.R_end_Composited"]: CFrameValue;
							["wingP7.R_Composited"]: CFrameValue;
							["Foot.R_Original"]: CFrameValue;
							["wingP8.L_Composited"]: CFrameValue;
							["Foot.L_Original"]: CFrameValue;
							["wingP1.L_Initial"]: CFrameValue;
							["wingP7.L_Composited"]: CFrameValue;
							Body_Original: CFrameValue;
							["Foot.L_end_Original"]: CFrameValue;
							["Foot.R_Composited"]: CFrameValue;
							["wingP1.R_Original"]: CFrameValue;
							["Foot.L_end_Initial"]: CFrameValue;
							["wingP8.R_Composited"]: CFrameValue;
							["wingP7.R_Initial"]: CFrameValue;
							["Foot.L_end_Composited"]: CFrameValue;
							["wingP6.L_Composited"]: CFrameValue;
							["Foot.L_Initial"]: CFrameValue;
							["Foot.L_Composited"]: CFrameValue;
							PterodactylEsq_Initial: CFrameValue;
							["wingP9.R_end_Initial"]: CFrameValue;
							Tail4_end_Initial: CFrameValue;
							["wingP6.L_Original"]: CFrameValue;
							["wingP4.R_Original"]: CFrameValue;
							["wingP7.R_Original"]: CFrameValue;
							["wingP4.L_Original"]: CFrameValue;
							["Foot.R_Initial"]: CFrameValue;
							["wingP9.L_Composited"]: CFrameValue;
							["wingP6.R_Initial"]: CFrameValue;
							["wingP6.R_Composited"]: CFrameValue;
							["wingP5.R_Original"]: CFrameValue;
							Tail2_Composited: CFrameValue;
							RootPart_Composited: CFrameValue;
							Tail4_Initial: CFrameValue;
							["wingP8.R_Original"]: CFrameValue;
							Tail4_Original: CFrameValue;
							Heat_Initial: CFrameValue;
							["wingP7.L_Original"]: CFrameValue;
							["wingP5.L_Original"]: CFrameValue;
							["wingP3.R_Original"]: CFrameValue;
							["wingP3.R_Composited"]: CFrameValue;
							["wingP3.L_Composited"]: CFrameValue;
							["wingP2.R_Initial"]: CFrameValue;
							["wingP2.R_Original"]: CFrameValue;
							Tail4_end_Original: CFrameValue;
							PterodactylEsq_Composited: CFrameValue;
							["wingP8.L_Original"]: CFrameValue;
							["wingP2.L_Composited"]: CFrameValue;
							["wingP4.L_Composited"]: CFrameValue;
							["wingP1.R_Initial"]: CFrameValue;
							Pterodactyl_Esq_Composited: CFrameValue;
							Tail2_Initial: CFrameValue;
							Heat_end_Composited: CFrameValue;
							Body_Composited: CFrameValue;
							Tail1_Initial: CFrameValue;
							["wingP9.L_Initial"]: CFrameValue;
							["wingP9.L_end_Composited"]: CFrameValue;
							["wingP7.L_Initial"]: CFrameValue;
							["wingP8.R_Initial"]: CFrameValue;
							["wingP5.L_Initial"]: CFrameValue;
							Tail2_Original: CFrameValue;
							Tail3_Original: CFrameValue;
							["wingP4.R_Initial"]: CFrameValue;
							RootPart_Initial: CFrameValue;
							["wingP3.L_Original"]: CFrameValue;
							Heat_Composited: CFrameValue;
							["wingP9.L_end_Initial"]: CFrameValue;
							["wingP1.L_Original"]: CFrameValue;
						};
						AnimSaves: Model & {
							["Pterodactyl Idle"]: KeyframeSequence & {
								End: Keyframe & {
									["wingP9.R_end"]: Pose;
									Pterodactyl: Pose;
									Heat_end: Pose;
									["Foot.L_end"]: Pose;
									["Foot.R_end"]: Pose;
									PterodactylModel: Pose & {
										["Foot.R"]: Pose;
										RootPart: Pose & {
											Body: Pose & {
												["wingP1.R"]: Pose & {
													["wingP2.R"]: Pose & {
														["wingP3.R"]: Pose & {
															["wingP4.R"]: Pose & {
																["wingP5.R"]: Pose & {
																	["wingP6.R"]: Pose & {
																		["wingP7.R"]: Pose & {
																			["wingP8.R"]: Pose & {
																				["wingP9.R"]: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
												["wingP1.L"]: Pose & {
													["wingP2.L"]: Pose & {
														["wingP3.L"]: Pose & {
															["wingP4.L"]: Pose & {
																["wingP5.L"]: Pose & {
																	["wingP6.L"]: Pose & {
																		["wingP7.L"]: Pose & {
																			["wingP8.L"]: Pose & {
																				["wingP9.L"]: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
												Heat: Pose;
												Tail1: Pose & {
													Tail2: Pose & {
														Tail3: Pose & {
															Tail4: Pose;
														};
													};
												};
											};
										};
										["Foot.L"]: Pose;
									};
									Tail4_end: Pose;
									["wingP9.L_end"]: Pose;
									RootNode: Pose;
								};
							};
							["Pterodactyl Flight"]: KeyframeSequence & {
								End: Keyframe & {
									["wingP9.R_end"]: Pose;
									Pterodactyl: Pose;
									Heat_end: Pose;
									["Foot.L_end"]: Pose;
									["Foot.R_end"]: Pose;
									PterodactylModel: Pose & {
										["Foot.R"]: Pose;
										RootPart: Pose & {
											Body: Pose & {
												["wingP1.R"]: Pose & {
													["wingP2.R"]: Pose & {
														["wingP3.R"]: Pose & {
															["wingP4.R"]: Pose & {
																["wingP5.R"]: Pose & {
																	["wingP6.R"]: Pose & {
																		["wingP7.R"]: Pose & {
																			["wingP8.R"]: Pose & {
																				["wingP9.R"]: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
												["wingP1.L"]: Pose & {
													["wingP2.L"]: Pose & {
														["wingP3.L"]: Pose & {
															["wingP4.L"]: Pose & {
																["wingP5.L"]: Pose & {
																	["wingP6.L"]: Pose & {
																		["wingP7.L"]: Pose & {
																			["wingP8.L"]: Pose & {
																				["wingP9.L"]: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
												Heat: Pose;
												Tail1: Pose & {
													Tail2: Pose & {
														Tail3: Pose & {
															Tail4: Pose;
														};
													};
												};
											};
										};
										["Foot.L"]: Pose;
									};
									Tail4_end: Pose;
									["wingP9.L_end"]: Pose;
									RootNode: Pose;
								};
							};
							["Pterodactyle Dig"]: KeyframeSequence & {
								End: Keyframe & {
									["wingP9.R_end"]: Pose;
									Pterodactyl: Pose;
									Heat_end: Pose;
									["Foot.L_end"]: Pose;
									["Foot.R_end"]: Pose;
									PterodactylModel: Pose & {
										["Foot.R"]: Pose;
										RootPart: Pose & {
											Body: Pose & {
												["wingP1.R"]: Pose & {
													["wingP2.R"]: Pose & {
														["wingP3.R"]: Pose & {
															["wingP4.R"]: Pose & {
																["wingP5.R"]: Pose & {
																	["wingP6.R"]: Pose & {
																		["wingP7.R"]: Pose & {
																			["wingP8.R"]: Pose & {
																				["wingP9.R"]: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
												["wingP1.L"]: Pose & {
													["wingP2.L"]: Pose & {
														["wingP3.L"]: Pose & {
															["wingP4.L"]: Pose & {
																["wingP5.L"]: Pose & {
																	["wingP6.L"]: Pose & {
																		["wingP7.L"]: Pose & {
																			["wingP8.L"]: Pose & {
																				["wingP9.L"]: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
												Heat: Pose;
												Tail1: Pose & {
													Tail2: Pose & {
														Tail3: Pose & {
															Tail4: Pose;
														};
													};
												};
											};
										};
										["Foot.L"]: Pose;
									};
									Tail4_end: Pose;
									["wingP9.L_end"]: Pose;
									RootNode: Pose;
								};
							};
						};
					};
					rebirth_effect: Part & {
						Main: Attachment;
						MiscEffects: Attachment & {
							Lines: ParticleEmitter;
						};
					};
					stego: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						AnimSaves: Model & {
							["Stegosaurus Walk"]: KeyframeSequence & {
								End: Keyframe & {
									["FFoot.R_end"]: Pose;
									["FFoot.L_end"]: Pose;
									Heat_end: Pose;
									["BFoot.L_end"]: Pose;
									Stegosaurus: Pose & {
										["FFoot.L"]: Pose;
										["BFoot.R"]: Pose;
										["BFoot.L"]: Pose;
										RootPart: Pose & {
											Body: Pose & {
												Neck: Pose & {
													Neck2: Pose & {
														Heat: Pose;
													};
												};
												Tail: Pose & {
													["Tail.001"]: Pose & {
														["Tail.002"]: Pose & {
															["Tail.004"]: Pose & {
																["Tail.005"]: Pose;
															};
														};
													};
												};
											};
										};
										["FFoot.R"]: Pose;
									};
									["Tail.005_end"]: Pose;
									["BFoot.R_end"]: Pose;
									Armature: Pose;
									RootNode: Pose;
								};
							};
							["Stegosaurus Dig"]: KeyframeSequence & {
								End: Keyframe & {
									["FFoot.R_end"]: Pose;
									["FFoot.L_end"]: Pose;
									Heat_end: Pose;
									["BFoot.L_end"]: Pose;
									Stegosaurus: Pose & {
										["FFoot.L"]: Pose;
										["BFoot.R"]: Pose;
										["BFoot.L"]: Pose;
										RootPart: Pose & {
											Body: Pose & {
												Neck: Pose & {
													Neck2: Pose & {
														Heat: Pose;
													};
												};
												Tail: Pose & {
													["Tail.001"]: Pose & {
														["Tail.002"]: Pose & {
															["Tail.004"]: Pose & {
																["Tail.005"]: Pose;
															};
														};
													};
												};
											};
										};
										["FFoot.R"]: Pose;
									};
									["Tail.005_end"]: Pose;
									["BFoot.R_end"]: Pose;
									Armature: Pose;
									RootNode: Pose;
								};
							};
							["Stegosaurus Idle"]: KeyframeSequence;
						};
						InitialPoses: Folder & {
							Heat_end_Original: CFrameValue;
							Armature_Initial: CFrameValue;
							Tail_Composited: CFrameValue;
							RootPart_Original: CFrameValue;
							["BFoot.L_end_Original"]: CFrameValue;
							Armature_Original: CFrameValue;
							["Tail.001_Composited"]: CFrameValue;
							Neck_Initial: CFrameValue;
							["BFoot.R_Original"]: CFrameValue;
							["Tail.005_Composited"]: CFrameValue;
							Stegosaurus_Composited: CFrameValue;
							["FFoot.R_Original"]: CFrameValue;
							["Tail.005_Original"]: CFrameValue;
							["Tail.004_Composited"]: CFrameValue;
							Stegosaurus_Original: CFrameValue;
							Heat_Original: CFrameValue;
							Body_Initial: CFrameValue;
							["BFoot.L_end_Composited"]: CFrameValue;
							["Tail.004_Initial"]: CFrameValue;
							["Tail.002_Initial"]: CFrameValue;
							["FFoot.R_end_Original"]: CFrameValue;
							["BFoot.L_Composited"]: CFrameValue;
							["BFoot.R_end_Composited"]: CFrameValue;
							Neck2_Initial: CFrameValue;
							["BFoot.R_end_Initial"]: CFrameValue;
							["FFoot.R_end_Composited"]: CFrameValue;
							["Tail.005_end_Original"]: CFrameValue;
							["FFoot.R_end_Initial"]: CFrameValue;
							["FFoot.L_Initial"]: CFrameValue;
							Body_Composited: CFrameValue;
							["Tail.001_Initial"]: CFrameValue;
							Tail_Initial: CFrameValue;
							["FFoot.L_end_Initial"]: CFrameValue;
							["Tail.005_Initial"]: CFrameValue;
							Neck2_Composited: CFrameValue;
							RootPart_Composited: CFrameValue;
							["BFoot.R_end_Original"]: CFrameValue;
							Heat_Initial: CFrameValue;
							Tail_Original: CFrameValue;
							["FFoot.R_Composited"]: CFrameValue;
							Stegosaurus_Initial: CFrameValue;
							Neck2_Original: CFrameValue;
							["FFoot.L_Composited"]: CFrameValue;
							RootPart_Initial: CFrameValue;
							Neck_Original: CFrameValue;
							["Tail.002_Original"]: CFrameValue;
							["BFoot.L_end_Initial"]: CFrameValue;
							Body_Original: CFrameValue;
							["Tail.004_Original"]: CFrameValue;
							["Tail.001_Original"]: CFrameValue;
							Heat_end_Composited: CFrameValue;
							Heat_end_Initial: CFrameValue;
							["BFoot.L_Initial"]: CFrameValue;
							["Tail.005_end_Composited"]: CFrameValue;
							["BFoot.L_Original"]: CFrameValue;
							["BFoot.R_Initial"]: CFrameValue;
							["Tail.002_Composited"]: CFrameValue;
							["FFoot.L_end_Original"]: CFrameValue;
							["FFoot.L_end_Composited"]: CFrameValue;
							["FFoot.L_Original"]: CFrameValue;
							Neck_Composited: CFrameValue;
							["FFoot.R_Initial"]: CFrameValue;
							Armature_Composited: CFrameValue;
							Heat_Composited: CFrameValue;
							["Tail.005_end_Initial"]: CFrameValue;
							["BFoot.R_Composited"]: CFrameValue;
						};
						Stegosaurus: MeshPart & {
							["FFoot.L"]: Bone;
							["BFoot.R"]: Bone;
							["BFoot.L"]: Bone;
							RootPart: Bone & {
								Body: Bone & {
									Neck: Bone & {
										Neck2: Bone & {
											Heat: Bone;
										};
									};
									Tail: Bone & {
										["Tail.001"]: Bone & {
											["Tail.002"]: Bone & {
												["Tail.004"]: Bone & {
													["Tail.005"]: Bone;
												};
											};
										};
									};
								};
							};
							["FFoot.R"]: Bone;
						};
					};
					tricera: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						InitialPoses: Folder & {
							Tip_Composited: CFrameValue;
							Mouth_Composited: CFrameValue;
							UpHead_end_Original: CFrameValue;
							UpHead_Initial: CFrameValue;
							["FLeg.R_end_Initial"]: CFrameValue;
							["BLeg.L_end_Original"]: CFrameValue;
							["FLeg.R_Initial"]: CFrameValue;
							["FLeg.L_end_Original"]: CFrameValue;
							["BLeg.R_Initial"]: CFrameValue;
							["Body.001_Original"]: CFrameValue;
							["FLeg.R_Composited"]: CFrameValue;
							["Armature.001_Original"]: CFrameValue;
							Tip_Original: CFrameValue;
							["BLeg.R_Composited"]: CFrameValue;
							["Body.005_end_Original"]: CFrameValue;
							["BLeg.R_end_Initial"]: CFrameValue;
							["Armature.001_Initial"]: CFrameValue;
							["Body.005_Original"]: CFrameValue;
							["Body.004_Original"]: CFrameValue;
							["Body.001_Initial"]: CFrameValue;
							["FLeg.L_Composited"]: CFrameValue;
							["BLeg.L_Composited"]: CFrameValue;
							["Body.003_Original"]: CFrameValue;
							UpHead_end_Composited: CFrameValue;
							Root_Initial: CFrameValue;
							Body_Initial: CFrameValue;
							["Body.003_Initial"]: CFrameValue;
							["BLeg.L_end_Composited"]: CFrameValue;
							Mouth_Original: CFrameValue;
							["FLeg.R_end_Original"]: CFrameValue;
							Root_Original: CFrameValue;
							["Armature.001_Composited"]: CFrameValue;
							["BLeg.R_end_Original"]: CFrameValue;
							["Body.003_Composited"]: CFrameValue;
							["BLeg.L_end_Initial"]: CFrameValue;
							UpHead_Original: CFrameValue;
							head_Initial: CFrameValue;
							Mouth_Initial: CFrameValue;
							UpHead_end_Initial: CFrameValue;
							Body_Composited: CFrameValue;
							["Body.002_Composited"]: CFrameValue;
							["FLeg.R_end_Composited"]: CFrameValue;
							head_Composited: CFrameValue;
							Pole_end_Composited: CFrameValue;
							["FLeg.L_Initial"]: CFrameValue;
							["FLeg.L_end_Initial"]: CFrameValue;
							["Body.002_Initial"]: CFrameValue;
							Mouth_end_Initial: CFrameValue;
							Cuerpo_low_Initial: CFrameValue;
							head_Original: CFrameValue;
							["Body.005_end_Initial"]: CFrameValue;
							Cuerpo_low_Original: CFrameValue;
							Cuerpo_low_Composited: CFrameValue;
							["FLeg.L_Original"]: CFrameValue;
							Pole_end_Initial: CFrameValue;
							Mouth_end_Composited: CFrameValue;
							Pole_end_Original: CFrameValue;
							["BLeg.L_Original"]: CFrameValue;
							Pole_Initial: CFrameValue;
							Tip_end_Composited: CFrameValue;
							["BLeg.L_Initial"]: CFrameValue;
							Pole_Composited: CFrameValue;
							["Body.004_Initial"]: CFrameValue;
							Tip_end_Original: CFrameValue;
							Tip_Initial: CFrameValue;
							["Body.005_Initial"]: CFrameValue;
							["BLeg.R_end_Composited"]: CFrameValue;
							Tip_end_Initial: CFrameValue;
							Body_Original: CFrameValue;
							["FLeg.L_end_Composited"]: CFrameValue;
							UpHead_Composited: CFrameValue;
							Pole_Original: CFrameValue;
							["FLeg.R_Original"]: CFrameValue;
							["Body.005_Composited"]: CFrameValue;
							["Body.005_end_Composited"]: CFrameValue;
							["BLeg.R_Original"]: CFrameValue;
							Mouth_end_Original: CFrameValue;
							["Body.001_Composited"]: CFrameValue;
							Root_Composited: CFrameValue;
							["Body.004_Composited"]: CFrameValue;
							["Body.002_Original"]: CFrameValue;
						};
						Cuerpo_low: MeshPart & {
							Root: Bone & {
								["BLeg.L"]: Bone;
								["FLeg.R"]: Bone;
								["FLeg.L"]: Bone;
								["BLeg.R"]: Bone;
								Body: Bone & {
									head: Bone;
									["Body.001"]: Bone & {
										["Body.002"]: Bone & {
											["Body.003"]: Bone & {
												["Body.004"]: Bone & {
													["Body.005"]: Bone;
												};
											};
										};
									};
								};
							};
						};
						AnimSaves: Model & {
							["Triceratops Run"]: KeyframeSequence & {
								End: Keyframe & {
									["FLeg.R_end"]: Pose;
									Tip: Pose;
									Cuerpo_low: Pose & {
										Root: Pose & {
											["BLeg.L"]: Pose;
											["FLeg.R"]: Pose;
											["FLeg.L"]: Pose;
											["BLeg.R"]: Pose;
											Body: Pose & {
												head: Pose;
												["Body.001"]: Pose & {
													["Body.002"]: Pose & {
														["Body.003"]: Pose & {
															["Body.004"]: Pose & {
																["Body.005"]: Pose;
															};
														};
													};
												};
											};
										};
									};
									UpHead_end: Pose;
									["Armature.001"]: Pose;
									Pole: Pose;
									["BLeg.L_end"]: Pose;
									Pole_end: Pose;
									["BLeg.R_end"]: Pose;
									Mouth_end: Pose;
									["Body.005_end"]: Pose;
									UpHead: Pose;
									["FLeg.L_end"]: Pose;
									Mouth: Pose;
									Tip_end: Pose;
									RootNode: Pose;
								};
							};
							["Triceratops Idle"]: KeyframeSequence & {
								End: Keyframe & {
									["FLeg.R_end"]: Pose;
									Tip: Pose;
									Cuerpo_low: Pose & {
										Root: Pose & {
											["BLeg.L"]: Pose;
											["FLeg.R"]: Pose;
											["FLeg.L"]: Pose;
											["BLeg.R"]: Pose;
											Body: Pose & {
												head: Pose;
												["Body.001"]: Pose & {
													["Body.002"]: Pose & {
														["Body.003"]: Pose & {
															["Body.004"]: Pose & {
																["Body.005"]: Pose;
															};
														};
													};
												};
											};
										};
									};
									UpHead_end: Pose;
									["Armature.001"]: Pose;
									Pole: Pose;
									["BLeg.L_end"]: Pose;
									Pole_end: Pose;
									["BLeg.R_end"]: Pose;
									Mouth_end: Pose;
									["Body.005_end"]: Pose;
									UpHead: Pose;
									["FLeg.L_end"]: Pose;
									Mouth: Pose;
									Tip_end: Pose;
									RootNode: Pose;
								};
							};
							["Triceratops Dig"]: KeyframeSequence & {
								End: Keyframe & {
									["FLeg.R_end"]: Pose;
									Tip: Pose;
									Cuerpo_low: Pose & {
										Root: Pose & {
											["BLeg.L"]: Pose;
											["FLeg.R"]: Pose;
											["FLeg.L"]: Pose;
											["BLeg.R"]: Pose;
											Body: Pose & {
												head: Pose;
												["Body.001"]: Pose & {
													["Body.002"]: Pose & {
														["Body.003"]: Pose & {
															["Body.004"]: Pose & {
																["Body.005"]: Pose;
															};
														};
													};
												};
											};
										};
									};
									UpHead_end: Pose;
									["Armature.001"]: Pose;
									Pole: Pose;
									["BLeg.L_end"]: Pose;
									Pole_end: Pose;
									["BLeg.R_end"]: Pose;
									Mouth_end: Pose;
									["Body.005_end"]: Pose;
									UpHead: Pose;
									["FLeg.L_end"]: Pose;
									Mouth: Pose;
									Tip_end: Pose;
									RootNode: Pose;
								};
							};
						};
					};
					coinflag: MeshPart;
					moneybag: MeshPart & {
						Trail: Trail;
						Att1: Attachment;
						Att2: Attachment;
					};
					turtle: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						AnimSaves: Model & {
							["Turtle Dig"]: KeyframeSequence & {
								End: Keyframe & {
									head_end: Pose;
									["Bleg.L_end"]: Pose;
									cap_low: Pose & {
										["Bleg.L"]: Pose;
										["Fleg.R"]: Pose;
										root: Pose & {
											Body: Pose & {
												["Body.001"]: Pose & {
													["Body.002"]: Pose & {
														["Body.003"]: Pose & {
															["Body.004"]: Pose & {
																head: Pose;
															};
														};
													};
												};
												tail: Pose & {
													["tail.001"]: Pose & {
														["tail.002"]: Pose & {
															["tail.003"]: Pose & {
																["tail.004"]: Pose;
															};
														};
													};
												};
											};
										};
										["Fleg.L"]: Pose;
										["Bleg.R"]: Pose;
									};
									["Fleg.R_end"]: Pose;
									["Fleg.L_end"]: Pose;
									Armature: Pose;
									["Bleg.R_end"]: Pose;
									["tail.004_end"]: Pose;
									RootNode: Pose;
								};
							};
							["Turtle Walk"]: KeyframeSequence & {
								End: Keyframe & {
									head_end: Pose;
									["Bleg.L_end"]: Pose;
									cap_low: Pose & {
										["Bleg.L"]: Pose;
										["Fleg.R"]: Pose;
										root: Pose & {
											Body: Pose & {
												["Body.001"]: Pose & {
													["Body.002"]: Pose & {
														["Body.003"]: Pose & {
															["Body.004"]: Pose & {
																head: Pose;
															};
														};
													};
												};
												tail: Pose & {
													["tail.001"]: Pose & {
														["tail.002"]: Pose & {
															["tail.003"]: Pose & {
																["tail.004"]: Pose;
															};
														};
													};
												};
											};
										};
										["Fleg.L"]: Pose;
										["Bleg.R"]: Pose;
									};
									["Fleg.R_end"]: Pose;
									["Fleg.L_end"]: Pose;
									Armature: Pose;
									["Bleg.R_end"]: Pose;
									["tail.004_end"]: Pose;
									RootNode: Pose;
								};
							};
							["Turtle Idle"]: KeyframeSequence & {
								End: Keyframe & {
									head_end: Pose;
									["Bleg.L_end"]: Pose;
									cap_low: Pose & {
										["Bleg.L"]: Pose;
										["Fleg.R"]: Pose;
										root: Pose & {
											Body: Pose & {
												["Body.001"]: Pose & {
													["Body.002"]: Pose & {
														["Body.003"]: Pose & {
															["Body.004"]: Pose & {
																head: Pose;
															};
														};
													};
												};
												tail: Pose & {
													["tail.001"]: Pose & {
														["tail.002"]: Pose & {
															["tail.003"]: Pose & {
																["tail.004"]: Pose;
															};
														};
													};
												};
											};
										};
										["Fleg.L"]: Pose;
										["Bleg.R"]: Pose;
									};
									["Fleg.R_end"]: Pose;
									["Fleg.L_end"]: Pose;
									Armature: Pose;
									["Bleg.R_end"]: Pose;
									["tail.004_end"]: Pose;
									RootNode: Pose;
								};
							};
						};
						InitialPoses: Folder & {
							["Bleg.L_end_Original"]: CFrameValue;
							["Fleg.L_end_Original"]: CFrameValue;
							Armature_Initial: CFrameValue;
							["tail.002_Original"]: CFrameValue;
							["tail.003_Composited"]: CFrameValue;
							["tail.002_Composited"]: CFrameValue;
							cap_low_Composited: CFrameValue;
							Armature_Original: CFrameValue;
							["Body.001_Original"]: CFrameValue;
							head_end_Original: CFrameValue;
							["tail.004_end_Initial"]: CFrameValue;
							["tail.004_Initial"]: CFrameValue;
							root_Original: CFrameValue;
							["Body.004_Original"]: CFrameValue;
							["tail.002_Initial"]: CFrameValue;
							["tail.004_end_Original"]: CFrameValue;
							["Body.001_Initial"]: CFrameValue;
							["Bleg.R_Original"]: CFrameValue;
							["Fleg.L_end_Composited"]: CFrameValue;
							["Bleg.R_Initial"]: CFrameValue;
							tail_Composited: CFrameValue;
							head_end_Composited: CFrameValue;
							Armature_Composited: CFrameValue;
							["Bleg.L_end_Composited"]: CFrameValue;
							["tail.001_Initial"]: CFrameValue;
							tail_Initial: CFrameValue;
							Body_Initial: CFrameValue;
							["Body.003_Initial"]: CFrameValue;
							["Bleg.L_end_Initial"]: CFrameValue;
							["Body.002_Original"]: CFrameValue;
							["Fleg.R_end_Initial"]: CFrameValue;
							["Bleg.L_Original"]: CFrameValue;
							tail_Original: CFrameValue;
							Body_Original: CFrameValue;
							["Bleg.R_end_Composited"]: CFrameValue;
							head_Initial: CFrameValue;
							["tail.003_Original"]: CFrameValue;
							Body_Composited: CFrameValue;
							["Body.002_Composited"]: CFrameValue;
							root_Initial: CFrameValue;
							head_Composited: CFrameValue;
							["Fleg.L_Composited"]: CFrameValue;
							["Fleg.L_Original"]: CFrameValue;
							root_Composited: CFrameValue;
							["Bleg.L_Composited"]: CFrameValue;
							head_Original: CFrameValue;
							["Fleg.R_end_Original"]: CFrameValue;
							["tail.001_Original"]: CFrameValue;
							["Body.001_Composited"]: CFrameValue;
							["Bleg.R_end_Original"]: CFrameValue;
							["tail.003_Initial"]: CFrameValue;
							cap_low_Initial: CFrameValue;
							["Fleg.R_end_Composited"]: CFrameValue;
							["Bleg.R_end_Initial"]: CFrameValue;
							["Body.003_Composited"]: CFrameValue;
							["Bleg.R_Composited"]: CFrameValue;
							["tail.004_end_Composited"]: CFrameValue;
							["Body.003_Original"]: CFrameValue;
							cap_low_Original: CFrameValue;
							["Fleg.R_Initial"]: CFrameValue;
							["Fleg.R_Original"]: CFrameValue;
							["Fleg.R_Composited"]: CFrameValue;
							["Body.002_Initial"]: CFrameValue;
							["tail.001_Composited"]: CFrameValue;
							head_end_Initial: CFrameValue;
							["Fleg.L_end_Initial"]: CFrameValue;
							["Bleg.L_Initial"]: CFrameValue;
							["Fleg.L_Initial"]: CFrameValue;
							["tail.004_Original"]: CFrameValue;
							["tail.004_Composited"]: CFrameValue;
							["Body.004_Composited"]: CFrameValue;
							["Body.004_Initial"]: CFrameValue;
						};
						cap_low: MeshPart & {
							["Bleg.L"]: Bone;
							["Fleg.R"]: Bone;
							root: Bone & {
								Body: Bone & {
									tail: Bone & {
										["tail.001"]: Bone & {
											["tail.002"]: Bone & {
												["tail.003"]: Bone & {
													["tail.004"]: Bone;
												};
											};
										};
									};
									["Body.001"]: Bone & {
										["Body.002"]: Bone & {
											["Body.003"]: Bone & {
												["Body.004"]: Bone & {
													head: Bone;
												};
											};
										};
									};
								};
							};
							["Fleg.L"]: Bone;
							["Bleg.R"]: Bone;
						};
					};
					cuepo: Model & {
						AnimationController: AnimationController;
						Cuerpo_low: MeshPart & {
							Rootpart: Bone & {
								["BLeg.L"]: Bone;
								["FLeg.R"]: Bone;
								["FLeg.L"]: Bone;
								["BLeg.R"]: Bone;
								Body: Bone & {
									Head: Bone & {
										tronk: Bone & {
											["tronk.001"]: Bone & {
												["tronk.002"]: Bone & {
													["tronk.003"]: Bone;
												};
											};
										};
									};
									tail: Bone & {
										["tail.001"]: Bone & {
											["tail.002"]: Bone & {
												["tail.003"]: Bone & {
													["tail.004"]: Bone & {
														["tail.005"]: Bone & {
															["tail.006"]: Bone;
														};
													};
												};
											};
										};
									};
								};
							};
						};
						InitialPoses: Folder & {
							Head_Original: CFrameValue;
							["tronk.001_Composited"]: CFrameValue;
							["tronk.001_Initial"]: CFrameValue;
							["tail.006_Composited"]: CFrameValue;
							["tronk.003_Original"]: CFrameValue;
							["BLeg.L_end_Original"]: CFrameValue;
							tronk_Composited: CFrameValue;
							["tail.002_Original"]: CFrameValue;
							["tail.003_Composited"]: CFrameValue;
							["tail.002_Composited"]: CFrameValue;
							["BLeg.R_Initial"]: CFrameValue;
							["FLeg.R_Composited"]: CFrameValue;
							["BLeg.R_Composited"]: CFrameValue;
							["tronk.003_Composited"]: CFrameValue;
							["tail.004_Initial"]: CFrameValue;
							["tail.002_Initial"]: CFrameValue;
							["tronk.003_Initial"]: CFrameValue;
							Cuerpo_low_Composited: CFrameValue;
							["FLeg.L_Composited"]: CFrameValue;
							["BLeg.L_Composited"]: CFrameValue;
							tronk_Original: CFrameValue;
							Mammuth_Initial: CFrameValue;
							["tronk.001_Original"]: CFrameValue;
							["tail.001_Initial"]: CFrameValue;
							tail_Initial: CFrameValue;
							["tail.006_end_Composited"]: CFrameValue;
							Body_Initial: CFrameValue;
							["tail.005_Initial"]: CFrameValue;
							["tronk.003_end_Initial"]: CFrameValue;
							["FLeg.R_end_Original"]: CFrameValue;
							["BLeg.R_end_Original"]: CFrameValue;
							["tail.006_end_Initial"]: CFrameValue;
							["BLeg.L_end_Initial"]: CFrameValue;
							["tail.005_Composited"]: CFrameValue;
							["tronk.003_end_Composited"]: CFrameValue;
							["tail.006_Initial"]: CFrameValue;
							["tail.006_Original"]: CFrameValue;
							["tronk.003_end_Original"]: CFrameValue;
							["tail.004_Composited"]: CFrameValue;
							Body_Composited: CFrameValue;
							["BLeg.L_Initial"]: CFrameValue;
							["tronk.002_Composited"]: CFrameValue;
							["FLeg.L_Initial"]: CFrameValue;
							["FLeg.L_end_Initial"]: CFrameValue;
							["BLeg.R_end_Composited"]: CFrameValue;
							["FLeg.R_end_Initial"]: CFrameValue;
							["FLeg.R_end_Composited"]: CFrameValue;
							["FLeg.R_Initial"]: CFrameValue;
							["FLeg.L_end_Composited"]: CFrameValue;
							["FLeg.L_end_Original"]: CFrameValue;
							["FLeg.L_Original"]: CFrameValue;
							["tail.001_Original"]: CFrameValue;
							["FLeg.R_Original"]: CFrameValue;
							["tronk.002_Initial"]: CFrameValue;
							["BLeg.L_Original"]: CFrameValue;
							["tail.003_Initial"]: CFrameValue;
							["BLeg.R_end_Initial"]: CFrameValue;
							Mammuth_Composited: CFrameValue;
							tail_Original: CFrameValue;
							Body_Original: CFrameValue;
							Rootpart_Initial: CFrameValue;
							Cuerpo_low_Original: CFrameValue;
							["tail.005_Original"]: CFrameValue;
							Rootpart_Original: CFrameValue;
							["tail.003_Original"]: CFrameValue;
							["BLeg.R_Original"]: CFrameValue;
							["BLeg.L_end_Composited"]: CFrameValue;
							Head_Initial: CFrameValue;
							Mammuth_Original: CFrameValue;
							["tail.001_Composited"]: CFrameValue;
							["tronk.002_Original"]: CFrameValue;
							Rootpart_Composited: CFrameValue;
							Cuerpo_low_Initial: CFrameValue;
							tail_Composited: CFrameValue;
							tronk_Initial: CFrameValue;
							Head_Composited: CFrameValue;
							["tail.006_end_Original"]: CFrameValue;
							["tail.004_Original"]: CFrameValue;
						};
					};
					["05_black_velo"]: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						Velociraptor: MeshPart & {
							Root: Bone & {
								Body: Bone & {
									head: Bone;
									Tail: Bone & {
										["Tail.001"]: Bone & {
											["Tail.002"]: Bone & {
												["Tail.003"]: Bone & {
													["Tail.004"]: Bone;
												};
											};
										};
									};
									["Hand.L"]: Bone;
									["Hand.R"]: Bone;
								};
							};
							["Leg.R"]: Bone;
							["Leg.L"]: Bone;
						};
						InitialPoses: Folder & {
							["Tail.004_end_Original"]: CFrameValue;
							["Hand.L_Original"]: CFrameValue;
							Body_Original: CFrameValue;
							["Tail.001_Original"]: CFrameValue;
							head_Initial: CFrameValue;
							Armature_Initial: CFrameValue;
							["Tail.003_Initial"]: CFrameValue;
							["Leg.L_Composited"]: CFrameValue;
							Velociraptor_Initial: CFrameValue;
							Velociraptor_Original: CFrameValue;
							["Hand.R_end_Original"]: CFrameValue;
							Body_Composited: CFrameValue;
							Armature_Original: CFrameValue;
							["Leg.L_end_Original"]: CFrameValue;
							["Hand.R_end_Composited"]: CFrameValue;
							Tail_Initial: CFrameValue;
							head_Composited: CFrameValue;
							["Leg.R_end_Initial"]: CFrameValue;
							["Hand.R_Initial"]: CFrameValue;
							["Tail.001_Composited"]: CFrameValue;
							["Leg.L_end_Composited"]: CFrameValue;
							["Leg.L_Initial"]: CFrameValue;
							["Leg.L_Original"]: CFrameValue;
							head_end_Initial: CFrameValue;
							["Leg.L_end_Initial"]: CFrameValue;
							["Leg.R_end_Original"]: CFrameValue;
							["Leg.R_end_Composited"]: CFrameValue;
							["Leg.R_Composited"]: CFrameValue;
							head_Original: CFrameValue;
							Tail_Original: CFrameValue;
							["Leg.R_Original"]: CFrameValue;
							["Leg.R_Initial"]: CFrameValue;
							head_end_Original: CFrameValue;
							Root_Original: CFrameValue;
							["Hand.L_end_Initial"]: CFrameValue;
							["Hand.L_end_Original"]: CFrameValue;
							["Hand.L_end_Composited"]: CFrameValue;
							["Hand.L_Initial"]: CFrameValue;
							["Tail.002_Composited"]: CFrameValue;
							["Tail.002_Original"]: CFrameValue;
							["Tail.003_Composited"]: CFrameValue;
							head_end_Composited: CFrameValue;
							["Tail.003_Original"]: CFrameValue;
							Velociraptor_Composited: CFrameValue;
							["Tail.004_Original"]: CFrameValue;
							["Hand.L_Composited"]: CFrameValue;
							Root_Initial: CFrameValue;
							Tail_Composited: CFrameValue;
							["Hand.R_Composited"]: CFrameValue;
							Body_Initial: CFrameValue;
							["Hand.R_end_Initial"]: CFrameValue;
							Armature_Composited: CFrameValue;
							["Tail.001_Initial"]: CFrameValue;
							["Tail.004_end_Composited"]: CFrameValue;
							["Tail.004_Composited"]: CFrameValue;
							["Tail.004_end_Initial"]: CFrameValue;
							["Tail.004_Initial"]: CFrameValue;
							Root_Composited: CFrameValue;
							["Hand.R_Original"]: CFrameValue;
							["Tail.002_Initial"]: CFrameValue;
						};
						AnimSaves: ObjectValue & {
							["Velociraptor Run"]: KeyframeSequence & {
								End: Keyframe & {
									head_end: Pose;
									Velociraptor: Pose & {
										Root: Pose & {
											Body: Pose & {
												["Hand.L"]: Pose;
												Tail: Pose & {
													["Tail.001"]: Pose & {
														["Tail.002"]: Pose & {
															["Tail.003"]: Pose & {
																["Tail.004"]: Pose;
															};
														};
													};
												};
												["Hand.R"]: Pose;
												head: Pose;
											};
										};
										["Leg.L"]: Pose;
										["Leg.R"]: Pose;
									};
									["Tail.004_end"]: Pose;
									["Leg.L_end"]: Pose;
									Armature: Pose;
									["Leg.R_end"]: Pose;
									["Hand.L_end"]: Pose;
									["Hand.R_end"]: Pose;
									RootNode: Pose;
								};
							};
							["Velociraptor Dig"]: KeyframeSequence & {
								End: Keyframe & {
									head_end: Pose;
									Velociraptor: Pose & {
										Root: Pose & {
											Body: Pose & {
												["Hand.L"]: Pose;
												Tail: Pose & {
													["Tail.001"]: Pose & {
														["Tail.002"]: Pose & {
															["Tail.003"]: Pose & {
																["Tail.004"]: Pose;
															};
														};
													};
												};
												["Hand.R"]: Pose;
												head: Pose;
											};
										};
										["Leg.L"]: Pose;
										["Leg.R"]: Pose;
									};
									["Tail.004_end"]: Pose;
									["Leg.L_end"]: Pose;
									Armature: Pose;
									["Leg.R_end"]: Pose;
									["Hand.L_end"]: Pose;
									["Hand.R_end"]: Pose;
									RootNode: Pose;
								};
							};
							["Velociraptor Idle"]: KeyframeSequence & {
								End: Keyframe & {
									head_end: Pose;
									Velociraptor: Pose & {
										Root: Pose & {
											Body: Pose & {
												["Hand.L"]: Pose;
												Tail: Pose & {
													["Tail.001"]: Pose & {
														["Tail.002"]: Pose & {
															["Tail.003"]: Pose & {
																["Tail.004"]: Pose;
															};
														};
													};
												};
												["Hand.R"]: Pose;
												head: Pose;
											};
										};
										["Leg.L"]: Pose;
										["Leg.R"]: Pose;
									};
									["Tail.004_end"]: Pose;
									["Leg.L_end"]: Pose;
									Armature: Pose;
									["Leg.R_end"]: Pose;
									["Hand.L_end"]: Pose;
									["Hand.R_end"]: Pose;
									RootNode: Pose;
								};
							};
						};
					};
					roof: Part;
					dino_2: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						InitialPoses: Folder & {
							["wingP8.L_Initial"]: CFrameValue;
							["wingP5.L_Composited"]: CFrameValue;
							["wingP4.R_Composited"]: CFrameValue;
							Heat_end_Original: CFrameValue;
							Heat_end_Initial: CFrameValue;
							RootPart_Original: CFrameValue;
							Tail1_Composited: CFrameValue;
							["wingP6.L_Initial"]: CFrameValue;
							["wingP9.R_end_Original"]: CFrameValue;
							["wingP9.R_Original"]: CFrameValue;
							["wingP9.R_Composited"]: CFrameValue;
							["wingP9.R_end_Composited"]: CFrameValue;
							Tail1_Original: CFrameValue;
							["wingP2.L_Original"]: CFrameValue;
							["wingP6.R_Original"]: CFrameValue;
							["wingP9.R_Initial"]: CFrameValue;
							Pterodactyl_Original: CFrameValue;
							["wingP3.L_Initial"]: CFrameValue;
							["wingP3.R_Initial"]: CFrameValue;
							["wingP5.R_Composited"]: CFrameValue;
							["wingP4.L_Initial"]: CFrameValue;
							["wingP2.L_Initial"]: CFrameValue;
							["wingP9.L_end_Original"]: CFrameValue;
							["wingP2.R_Composited"]: CFrameValue;
							["wingP5.R_Initial"]: CFrameValue;
							Tail4_Composited: CFrameValue;
							Tail4_end_Composited: CFrameValue;
							["wingP1.L_Composited"]: CFrameValue;
							Pterodactyl_Composited: CFrameValue;
							Tail3_Composited: CFrameValue;
							Tail3_Original: CFrameValue;
							["wingP1.R_Composited"]: CFrameValue;
							["wingP6.L_Original"]: CFrameValue;
							Tail1_Initial: CFrameValue;
							PterodactylModel_Composited: CFrameValue;
							["wingP9.L_Original"]: CFrameValue;
							Tail3_Initial: CFrameValue;
							["Foot.R_end_Initial"]: CFrameValue;
							["Foot.R_end_Original"]: CFrameValue;
							["Foot.R_end_Composited"]: CFrameValue;
							["wingP5.R_Original"]: CFrameValue;
							["wingP8.L_Composited"]: CFrameValue;
							["Foot.L_Original"]: CFrameValue;
							["wingP1.L_Initial"]: CFrameValue;
							["wingP7.L_Composited"]: CFrameValue;
							Body_Original: CFrameValue;
							["Foot.L_end_Original"]: CFrameValue;
							["Foot.R_Original"]: CFrameValue;
							["wingP1.R_Original"]: CFrameValue;
							Pterodactyl_Initial: CFrameValue;
							["wingP8.R_Composited"]: CFrameValue;
							["wingP7.R_Initial"]: CFrameValue;
							["Foot.R_Composited"]: CFrameValue;
							["wingP6.L_Composited"]: CFrameValue;
							["Foot.L_end_Initial"]: CFrameValue;
							["Foot.L_end_Composited"]: CFrameValue;
							Body_Composited: CFrameValue;
							["Foot.L_Initial"]: CFrameValue;
							Tail4_end_Initial: CFrameValue;
							["Foot.L_Composited"]: CFrameValue;
							["wingP9.R_end_Initial"]: CFrameValue;
							PterodactylModel_Original: CFrameValue;
							["wingP4.L_Original"]: CFrameValue;
							["Foot.R_Initial"]: CFrameValue;
							["wingP9.L_Composited"]: CFrameValue;
							["wingP7.R_Original"]: CFrameValue;
							["wingP7.R_Composited"]: CFrameValue;
							["wingP6.R_Initial"]: CFrameValue;
							["wingP6.R_Composited"]: CFrameValue;
							RootPart_Composited: CFrameValue;
							Tail4_Initial: CFrameValue;
							["wingP8.R_Original"]: CFrameValue;
							Tail2_Original: CFrameValue;
							Heat_Initial: CFrameValue;
							["wingP7.L_Original"]: CFrameValue;
							["wingP5.L_Original"]: CFrameValue;
							Tail2_Composited: CFrameValue;
							["wingP4.R_Original"]: CFrameValue;
							["wingP3.L_Original"]: CFrameValue;
							["wingP3.R_Original"]: CFrameValue;
							["wingP3.R_Composited"]: CFrameValue;
							Tail4_end_Original: CFrameValue;
							RootPart_Initial: CFrameValue;
							["wingP8.L_Original"]: CFrameValue;
							["wingP2.L_Composited"]: CFrameValue;
							["wingP2.R_Initial"]: CFrameValue;
							["wingP2.R_Original"]: CFrameValue;
							["wingP1.R_Initial"]: CFrameValue;
							["wingP3.L_Composited"]: CFrameValue;
							Heat_end_Composited: CFrameValue;
							Body_Initial: CFrameValue;
							["wingP9.L_end_Composited"]: CFrameValue;
							["wingP9.L_Initial"]: CFrameValue;
							Tail2_Initial: CFrameValue;
							Tail4_Original: CFrameValue;
							["wingP8.R_Initial"]: CFrameValue;
							["wingP5.L_Initial"]: CFrameValue;
							["wingP7.L_Initial"]: CFrameValue;
							PterodactylModel_Initial: CFrameValue;
							["wingP4.R_Initial"]: CFrameValue;
							["wingP1.L_Original"]: CFrameValue;
							["wingP4.L_Composited"]: CFrameValue;
							Heat_Composited: CFrameValue;
							["wingP9.L_end_Initial"]: CFrameValue;
							Heat_Original: CFrameValue;
						};
						PterodactylModel: MeshPart & {
							["Foot.R"]: Bone;
							RootPart: Bone & {
								Body: Bone & {
									["wingP1.R"]: Bone & {
										["wingP2.R"]: Bone & {
											["wingP3.R"]: Bone & {
												["wingP4.R"]: Bone & {
													["wingP5.R"]: Bone & {
														["wingP6.R"]: Bone & {
															["wingP7.R"]: Bone & {
																["wingP8.R"]: Bone & {
																	["wingP9.R"]: Bone;
																};
															};
														};
													};
												};
											};
										};
									};
									Heat: Bone;
									["wingP1.L"]: Bone & {
										["wingP2.L"]: Bone & {
											["wingP3.L"]: Bone & {
												["wingP4.L"]: Bone & {
													["wingP5.L"]: Bone & {
														["wingP6.L"]: Bone & {
															["wingP7.L"]: Bone & {
																["wingP8.L"]: Bone & {
																	["wingP9.L"]: Bone;
																};
															};
														};
													};
												};
											};
										};
									};
									Tail1: Bone & {
										Tail2: Bone & {
											Tail3: Bone & {
												Tail4: Bone;
											};
										};
									};
								};
							};
							["Foot.L"]: Bone;
						};
						AnimSaves: Model & {
							["Pterodactyl Idle"]: KeyframeSequence & {
								End: Keyframe & {
									["wingP9.R_end"]: Pose;
									Pterodactyl: Pose;
									Heat_end: Pose;
									["Foot.L_end"]: Pose;
									["Foot.R_end"]: Pose;
									PterodactylModel: Pose & {
										["Foot.R"]: Pose;
										RootPart: Pose & {
											Body: Pose & {
												["wingP1.R"]: Pose & {
													["wingP2.R"]: Pose & {
														["wingP3.R"]: Pose & {
															["wingP4.R"]: Pose & {
																["wingP5.R"]: Pose & {
																	["wingP6.R"]: Pose & {
																		["wingP7.R"]: Pose & {
																			["wingP8.R"]: Pose & {
																				["wingP9.R"]: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
												["wingP1.L"]: Pose & {
													["wingP2.L"]: Pose & {
														["wingP3.L"]: Pose & {
															["wingP4.L"]: Pose & {
																["wingP5.L"]: Pose & {
																	["wingP6.L"]: Pose & {
																		["wingP7.L"]: Pose & {
																			["wingP8.L"]: Pose & {
																				["wingP9.L"]: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
												Heat: Pose;
												Tail1: Pose & {
													Tail2: Pose & {
														Tail3: Pose & {
															Tail4: Pose;
														};
													};
												};
											};
										};
										["Foot.L"]: Pose;
									};
									Tail4_end: Pose;
									["wingP9.L_end"]: Pose;
									RootNode: Pose;
								};
							};
							["Pterodactyl Flight"]: KeyframeSequence & {
								End: Keyframe & {
									["wingP9.R_end"]: Pose;
									Pterodactyl: Pose;
									Heat_end: Pose;
									["Foot.L_end"]: Pose;
									["Foot.R_end"]: Pose;
									PterodactylModel: Pose & {
										["Foot.R"]: Pose;
										RootPart: Pose & {
											Body: Pose & {
												["wingP1.R"]: Pose & {
													["wingP2.R"]: Pose & {
														["wingP3.R"]: Pose & {
															["wingP4.R"]: Pose & {
																["wingP5.R"]: Pose & {
																	["wingP6.R"]: Pose & {
																		["wingP7.R"]: Pose & {
																			["wingP8.R"]: Pose & {
																				["wingP9.R"]: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
												["wingP1.L"]: Pose & {
													["wingP2.L"]: Pose & {
														["wingP3.L"]: Pose & {
															["wingP4.L"]: Pose & {
																["wingP5.L"]: Pose & {
																	["wingP6.L"]: Pose & {
																		["wingP7.L"]: Pose & {
																			["wingP8.L"]: Pose & {
																				["wingP9.L"]: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
												Heat: Pose;
												Tail1: Pose & {
													Tail2: Pose & {
														Tail3: Pose & {
															Tail4: Pose;
														};
													};
												};
											};
										};
										["Foot.L"]: Pose;
									};
									Tail4_end: Pose;
									["wingP9.L_end"]: Pose;
									RootNode: Pose;
								};
							};
							["Pterodactyle Dig"]: KeyframeSequence & {
								End: Keyframe & {
									["wingP9.R_end"]: Pose;
									Pterodactyl: Pose;
									Heat_end: Pose;
									["Foot.L_end"]: Pose;
									["Foot.R_end"]: Pose;
									PterodactylModel: Pose & {
										["Foot.R"]: Pose;
										RootPart: Pose & {
											Body: Pose & {
												["wingP1.R"]: Pose & {
													["wingP2.R"]: Pose & {
														["wingP3.R"]: Pose & {
															["wingP4.R"]: Pose & {
																["wingP5.R"]: Pose & {
																	["wingP6.R"]: Pose & {
																		["wingP7.R"]: Pose & {
																			["wingP8.R"]: Pose & {
																				["wingP9.R"]: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
												["wingP1.L"]: Pose & {
													["wingP2.L"]: Pose & {
														["wingP3.L"]: Pose & {
															["wingP4.L"]: Pose & {
																["wingP5.L"]: Pose & {
																	["wingP6.L"]: Pose & {
																		["wingP7.L"]: Pose & {
																			["wingP8.L"]: Pose & {
																				["wingP9.L"]: Pose;
																			};
																		};
																	};
																};
															};
														};
													};
												};
												Heat: Pose;
												Tail1: Pose & {
													Tail2: Pose & {
														Tail3: Pose & {
															Tail4: Pose;
														};
													};
												};
											};
										};
										["Foot.L"]: Pose;
									};
									Tail4_end: Pose;
									["wingP9.L_end"]: Pose;
									RootNode: Pose;
								};
							};
						};
					};
					velo: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						Velociraptor: MeshPart & {
							Root: Bone & {
								Body: Bone & {
									head: Bone;
									Tail: Bone & {
										["Tail.001"]: Bone & {
											["Tail.002"]: Bone & {
												["Tail.003"]: Bone & {
													["Tail.004"]: Bone;
												};
											};
										};
									};
									["Hand.L"]: Bone;
									["Hand.R"]: Bone;
								};
							};
							["Leg.R"]: Bone;
							["Leg.L"]: Bone;
						};
						InitialPoses: Folder & {
							["Tail.004_end_Original"]: CFrameValue;
							["Hand.L_Original"]: CFrameValue;
							Body_Original: CFrameValue;
							["Tail.001_Original"]: CFrameValue;
							head_Initial: CFrameValue;
							Armature_Initial: CFrameValue;
							["Tail.003_Initial"]: CFrameValue;
							["Leg.L_Composited"]: CFrameValue;
							Velociraptor_Initial: CFrameValue;
							Velociraptor_Original: CFrameValue;
							["Hand.R_end_Original"]: CFrameValue;
							Body_Composited: CFrameValue;
							Armature_Original: CFrameValue;
							["Leg.L_end_Original"]: CFrameValue;
							["Hand.R_end_Composited"]: CFrameValue;
							Tail_Initial: CFrameValue;
							head_Composited: CFrameValue;
							["Leg.R_end_Initial"]: CFrameValue;
							["Hand.R_Initial"]: CFrameValue;
							["Tail.001_Composited"]: CFrameValue;
							["Leg.L_end_Composited"]: CFrameValue;
							["Leg.L_Initial"]: CFrameValue;
							["Leg.L_Original"]: CFrameValue;
							head_end_Initial: CFrameValue;
							["Leg.L_end_Initial"]: CFrameValue;
							["Leg.R_end_Original"]: CFrameValue;
							["Leg.R_end_Composited"]: CFrameValue;
							["Leg.R_Composited"]: CFrameValue;
							head_Original: CFrameValue;
							Tail_Original: CFrameValue;
							["Leg.R_Original"]: CFrameValue;
							["Leg.R_Initial"]: CFrameValue;
							head_end_Original: CFrameValue;
							Root_Original: CFrameValue;
							["Hand.L_end_Initial"]: CFrameValue;
							["Hand.L_end_Original"]: CFrameValue;
							["Hand.L_end_Composited"]: CFrameValue;
							["Hand.L_Initial"]: CFrameValue;
							["Tail.002_Composited"]: CFrameValue;
							["Tail.002_Original"]: CFrameValue;
							["Tail.003_Composited"]: CFrameValue;
							head_end_Composited: CFrameValue;
							["Tail.003_Original"]: CFrameValue;
							Velociraptor_Composited: CFrameValue;
							["Tail.004_Original"]: CFrameValue;
							["Hand.L_Composited"]: CFrameValue;
							Root_Initial: CFrameValue;
							Tail_Composited: CFrameValue;
							["Hand.R_Composited"]: CFrameValue;
							Body_Initial: CFrameValue;
							["Hand.R_end_Initial"]: CFrameValue;
							Armature_Composited: CFrameValue;
							["Tail.001_Initial"]: CFrameValue;
							["Tail.004_end_Composited"]: CFrameValue;
							["Tail.004_Composited"]: CFrameValue;
							["Tail.004_end_Initial"]: CFrameValue;
							["Tail.004_Initial"]: CFrameValue;
							Root_Composited: CFrameValue;
							["Hand.R_Original"]: CFrameValue;
							["Tail.002_Initial"]: CFrameValue;
						};
						AnimSaves: ObjectValue & {
							["Velociraptor Run"]: KeyframeSequence & {
								End: Keyframe & {
									head_end: Pose;
									Velociraptor: Pose & {
										Root: Pose & {
											Body: Pose & {
												["Hand.L"]: Pose;
												Tail: Pose & {
													["Tail.001"]: Pose & {
														["Tail.002"]: Pose & {
															["Tail.003"]: Pose & {
																["Tail.004"]: Pose;
															};
														};
													};
												};
												["Hand.R"]: Pose;
												head: Pose;
											};
										};
										["Leg.L"]: Pose;
										["Leg.R"]: Pose;
									};
									["Tail.004_end"]: Pose;
									["Leg.L_end"]: Pose;
									Armature: Pose;
									["Leg.R_end"]: Pose;
									["Hand.L_end"]: Pose;
									["Hand.R_end"]: Pose;
									RootNode: Pose;
								};
							};
							["Velociraptor Dig"]: KeyframeSequence & {
								End: Keyframe & {
									head_end: Pose;
									Velociraptor: Pose & {
										Root: Pose & {
											Body: Pose & {
												["Hand.L"]: Pose;
												Tail: Pose & {
													["Tail.001"]: Pose & {
														["Tail.002"]: Pose & {
															["Tail.003"]: Pose & {
																["Tail.004"]: Pose;
															};
														};
													};
												};
												["Hand.R"]: Pose;
												head: Pose;
											};
										};
										["Leg.L"]: Pose;
										["Leg.R"]: Pose;
									};
									["Tail.004_end"]: Pose;
									["Leg.L_end"]: Pose;
									Armature: Pose;
									["Leg.R_end"]: Pose;
									["Hand.L_end"]: Pose;
									["Hand.R_end"]: Pose;
									RootNode: Pose;
								};
							};
							["Velociraptor Idle"]: KeyframeSequence & {
								End: Keyframe & {
									head_end: Pose;
									Velociraptor: Pose & {
										Root: Pose & {
											Body: Pose & {
												["Hand.L"]: Pose;
												Tail: Pose & {
													["Tail.001"]: Pose & {
														["Tail.002"]: Pose & {
															["Tail.003"]: Pose & {
																["Tail.004"]: Pose;
															};
														};
													};
												};
												["Hand.R"]: Pose;
												head: Pose;
											};
										};
										["Leg.L"]: Pose;
										["Leg.R"]: Pose;
									};
									["Tail.004_end"]: Pose;
									["Leg.L_end"]: Pose;
									Armature: Pose;
									["Leg.R_end"]: Pose;
									["Hand.L_end"]: Pose;
									["Hand.R_end"]: Pose;
									RootNode: Pose;
								};
							};
						};
					};
					dodo2: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						AnimSaves: ObjectValue & {
							["Dodo Dig"]: KeyframeSequence & {
								End: Keyframe & {
									Esqueleto: Pose;
									["Foot.L_end"]: Pose;
									["Foot.R_end"]: Pose;
									Dodo: Pose & {
										["Foot.R"]: Pose;
										RootPart: Pose & {
											Body: Pose & {
												["wing.L"]: Pose;
												tail: Pose;
												["wing.R"]: Pose;
												Head: Pose & {
													feather: Pose;
												};
											};
										};
										["Foot.L"]: Pose;
									};
									feather_end: Pose;
									["wing.L_end"]: Pose;
									tail_end: Pose;
									["wing.R_end"]: Pose;
									RootNode: Pose;
								};
							};
							["Dodo Walk"]: KeyframeSequence & {
								End: Keyframe & {
									Esqueleto: Pose;
									["Foot.L_end"]: Pose;
									["Foot.R_end"]: Pose;
									Dodo: Pose & {
										["Foot.R"]: Pose;
										RootPart: Pose & {
											Body: Pose & {
												["wing.L"]: Pose;
												tail: Pose;
												["wing.R"]: Pose;
												Head: Pose & {
													feather: Pose;
												};
											};
										};
										["Foot.L"]: Pose;
									};
									feather_end: Pose;
									["wing.L_end"]: Pose;
									tail_end: Pose;
									["wing.R_end"]: Pose;
									RootNode: Pose;
								};
							};
							["Dodo Idle"]: KeyframeSequence & {
								End: Keyframe & {
									Esqueleto: Pose;
									["Foot.L_end"]: Pose;
									["Foot.R_end"]: Pose;
									Dodo: Pose & {
										["Foot.R"]: Pose;
										RootPart: Pose & {
											Body: Pose & {
												["wing.L"]: Pose;
												tail: Pose;
												["wing.R"]: Pose;
												Head: Pose & {
													feather: Pose;
												};
											};
										};
										["Foot.L"]: Pose;
									};
									feather_end: Pose;
									["wing.L_end"]: Pose;
									tail_end: Pose;
									["wing.R_end"]: Pose;
									RootNode: Pose;
								};
							};
						};
						InitialPoses: Folder & {
							Head_Original: CFrameValue;
							tail_Original: CFrameValue;
							Body_Original: CFrameValue;
							Esqueleto_Original: CFrameValue;
							feather_Original: CFrameValue;
							Dodo_Composited: CFrameValue;
							RootPart_Original: CFrameValue;
							Body_Composited: CFrameValue;
							Dodo_Original: CFrameValue;
							["Foot.R_end_Composited"]: CFrameValue;
							["wing.R_end_Composited"]: CFrameValue;
							["Foot.R_Initial"]: CFrameValue;
							["wing.L_Composited"]: CFrameValue;
							tail_end_Original: CFrameValue;
							["Foot.R_end_Initial"]: CFrameValue;
							RootPart_Composited: CFrameValue;
							["Foot.R_end_Original"]: CFrameValue;
							["wing.L_end_Initial"]: CFrameValue;
							feather_Initial: CFrameValue;
							["Foot.R_Original"]: CFrameValue;
							["Foot.R_Composited"]: CFrameValue;
							["Foot.L_end_Initial"]: CFrameValue;
							tail_end_Initial: CFrameValue;
							Dodo_Initial: CFrameValue;
							feather_end_Composited: CFrameValue;
							Esqueleto_Initial: CFrameValue;
							Head_Initial: CFrameValue;
							["Foot.L_Initial"]: CFrameValue;
							tail_Composited: CFrameValue;
							["wing.L_end_Composited"]: CFrameValue;
							feather_Composited: CFrameValue;
							["Foot.L_end_Original"]: CFrameValue;
							Esqueleto_Composited: CFrameValue;
							["Foot.L_Original"]: CFrameValue;
							["Foot.L_Composited"]: CFrameValue;
							["wing.R_end_Initial"]: CFrameValue;
							["wing.R_Original"]: CFrameValue;
							["wing.R_end_Original"]: CFrameValue;
							tail_Initial: CFrameValue;
							Head_Composited: CFrameValue;
							Body_Initial: CFrameValue;
							feather_end_Original: CFrameValue;
							RootPart_Initial: CFrameValue;
							["wing.R_Composited"]: CFrameValue;
							["wing.L_end_Original"]: CFrameValue;
							["Foot.L_end_Composited"]: CFrameValue;
							["wing.R_Initial"]: CFrameValue;
							["wing.L_Initial"]: CFrameValue;
							["wing.L_Original"]: CFrameValue;
							tail_end_Composited: CFrameValue;
							feather_end_Initial: CFrameValue;
						};
						Body: MeshPart & {
							["Foot.R"]: Bone;
							RootPart: Bone & {
								Body2: Bone & {
									["wing.R"]: Bone;
									tail: Bone;
									["wing.L"]: Bone;
									Head: Bone & {
										feather: Bone;
									};
								};
							};
							["Foot.L"]: Bone;
						};
					};
					saber: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						AnimSaves: Model & {
							["Sabertooth Dig"]: KeyframeSequence & {
								End: Keyframe & {
									["FLeg.R_end"]: Pose;
									["FLeg.L_end"]: Pose;
									["BLeg.R_end"]: Pose;
									Body: Pose & {
										["BLeg.L"]: Pose;
										["FLeg.R"]: Pose;
										tail: Pose & {
											["tail.001"]: Pose & {
												["tail.002"]: Pose & {
													["tail.003"]: Pose & {
														["tail.004"]: Pose;
													};
												};
											};
										};
										["FLeg.L"]: Pose;
										["BLeg.R"]: Pose;
										body: Pose & {
											head: Pose;
										};
									};
									["tail.004_end"]: Pose;
									Root_end: Pose;
									head_end: Pose;
									Root: Pose;
									["BLeg.L_end"]: Pose;
									organic: Pose;
									RootNode: Pose;
								};
							};
							["Sabertooth Idle"]: KeyframeSequence & {
								End: Keyframe & {
									["FLeg.R_end"]: Pose;
									["FLeg.L_end"]: Pose;
									["BLeg.R_end"]: Pose;
									Body: Pose & {
										["BLeg.L"]: Pose;
										["FLeg.R"]: Pose;
										tail: Pose & {
											["tail.001"]: Pose & {
												["tail.002"]: Pose & {
													["tail.003"]: Pose & {
														["tail.004"]: Pose;
													};
												};
											};
										};
										["FLeg.L"]: Pose;
										["BLeg.R"]: Pose;
										body: Pose & {
											head: Pose;
										};
									};
									["tail.004_end"]: Pose;
									Root_end: Pose;
									head_end: Pose;
									Root: Pose;
									["BLeg.L_end"]: Pose;
									organic: Pose;
									RootNode: Pose;
								};
							};
							["Sabertooth Run"]: KeyframeSequence;
						};
						InitialPoses: Folder & {
							tail_Original: CFrameValue;
							["BLeg.R_end_Initial"]: CFrameValue;
							Root_Original: CFrameValue;
							Body_Original: CFrameValue;
							["BLeg.R_end_Composited"]: CFrameValue;
							organic_Original: CFrameValue;
							head_Initial: CFrameValue;
							["BLeg.L_end_Original"]: CFrameValue;
							["BLeg.R_Initial"]: CFrameValue;
							["tail.003_Initial"]: CFrameValue;
							["tail.002_Original"]: CFrameValue;
							["tail.003_Composited"]: CFrameValue;
							Root_end_Initial: CFrameValue;
							["tail.002_Composited"]: CFrameValue;
							organic_Composited: CFrameValue;
							["BLeg.R_Composited"]: CFrameValue;
							["BLeg.L_end_Initial"]: CFrameValue;
							["FLeg.R_Composited"]: CFrameValue;
							["BLeg.L_end_Composited"]: CFrameValue;
							head_Composited: CFrameValue;
							body_Initial: CFrameValue;
							["FLeg.L_Initial"]: CFrameValue;
							head_end_Original: CFrameValue;
							["FLeg.L_end_Initial"]: CFrameValue;
							["BLeg.L_Initial"]: CFrameValue;
							["FLeg.R_Initial"]: CFrameValue;
							head_end_Initial: CFrameValue;
							["tail.004_Initial"]: CFrameValue;
							["BLeg.L_Composited"]: CFrameValue;
							Root_end_Original: CFrameValue;
							["tail.002_Initial"]: CFrameValue;
							head_Original: CFrameValue;
							["FLeg.R_end_Initial"]: CFrameValue;
							["FLeg.L_Composited"]: CFrameValue;
							["tail.003_Original"]: CFrameValue;
							body_Original: CFrameValue;
							["tail.001_Original"]: CFrameValue;
							["FLeg.R_Original"]: CFrameValue;
							["FLeg.R_end_Composited"]: CFrameValue;
							["BLeg.L_Original"]: CFrameValue;
							tail_Composited: CFrameValue;
							Root_end_Composited: CFrameValue;
							["FLeg.L_end_Original"]: CFrameValue;
							["FLeg.L_end_Composited"]: CFrameValue;
							head_end_Composited: CFrameValue;
							["FLeg.L_Original"]: CFrameValue;
							body_Composited: CFrameValue;
							["tail.001_Initial"]: CFrameValue;
							["tail.004_end_Initial"]: CFrameValue;
							Root_Initial: CFrameValue;
							tail_Initial: CFrameValue;
							["tail.004_end_Original"]: CFrameValue;
							Body_Initial: CFrameValue;
							["tail.004_end_Composited"]: CFrameValue;
							["tail.001_Composited"]: CFrameValue;
							["tail.004_Original"]: CFrameValue;
							["tail.004_Composited"]: CFrameValue;
							["BLeg.R_Original"]: CFrameValue;
							["FLeg.R_end_Original"]: CFrameValue;
							organic_Initial: CFrameValue;
							Root_Composited: CFrameValue;
							Body_Composited: CFrameValue;
							["BLeg.R_end_Original"]: CFrameValue;
						};
						Body: MeshPart & {
							["BLeg.L"]: Bone;
							["FLeg.R"]: Bone;
							["FLeg.L"]: Bone;
							tail: Bone & {
								["tail.001"]: Bone & {
									["tail.002"]: Bone & {
										["tail.003"]: Bone & {
											["tail.004"]: Bone;
										};
									};
								};
							};
							["BLeg.R"]: Bone;
							body: Bone & {
								head: Bone;
							};
						};
					};
					mammoth: Model & {
						CuerpoEsq: MeshPart & {
							Rootpart: Bone & {
								["BLeg.L"]: Bone;
								["FLeg.R"]: Bone;
								["FLeg.L"]: Bone;
								["BLeg.R"]: Bone;
								Body: Bone & {
									Head: Bone & {
										tronk: Bone & {
											["tronk.001"]: Bone & {
												["tronk.002"]: Bone & {
													["tronk.003"]: Bone;
												};
											};
										};
									};
									tail: Bone & {
										["tail.001"]: Bone & {
											["tail.002"]: Bone & {
												["tail.003"]: Bone & {
													["tail.004"]: Bone & {
														["tail.005"]: Bone;
													};
												};
											};
										};
									};
								};
							};
						};
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						InitialPoses: Folder & {
							Head_Original: CFrameValue;
							["tronk.001_Composited"]: CFrameValue;
							["tronk.001_Initial"]: CFrameValue;
							["tail.006_Composited"]: CFrameValue;
							["tronk.003_Original"]: CFrameValue;
							["BLeg.L_end_Original"]: CFrameValue;
							tronk_Composited: CFrameValue;
							["tail.002_Original"]: CFrameValue;
							["tail.003_Composited"]: CFrameValue;
							["tail.002_Composited"]: CFrameValue;
							["BLeg.R_Initial"]: CFrameValue;
							["FLeg.R_Composited"]: CFrameValue;
							["BLeg.R_Composited"]: CFrameValue;
							["tronk.003_Composited"]: CFrameValue;
							["tail.004_Initial"]: CFrameValue;
							["tail.002_Initial"]: CFrameValue;
							["tronk.003_Initial"]: CFrameValue;
							["FLeg.L_Composited"]: CFrameValue;
							["BLeg.L_Composited"]: CFrameValue;
							Head_Initial: CFrameValue;
							MammuthFossil_Composited: CFrameValue;
							["tronk.001_Original"]: CFrameValue;
							["tail.001_Initial"]: CFrameValue;
							tail_Initial: CFrameValue;
							["tail.006_end_Composited"]: CFrameValue;
							Body_Initial: CFrameValue;
							tronk_Initial: CFrameValue;
							["tronk.003_end_Initial"]: CFrameValue;
							["FLeg.R_end_Original"]: CFrameValue;
							["BLeg.R_end_Original"]: CFrameValue;
							["tail.006_end_Initial"]: CFrameValue;
							["BLeg.L_end_Initial"]: CFrameValue;
							["tail.005_Composited"]: CFrameValue;
							["tronk.003_end_Composited"]: CFrameValue;
							["tail.006_Initial"]: CFrameValue;
							["tail.006_Original"]: CFrameValue;
							["tronk.003_end_Original"]: CFrameValue;
							["tail.004_Composited"]: CFrameValue;
							Body_Composited: CFrameValue;
							["BLeg.L_Initial"]: CFrameValue;
							["tronk.002_Composited"]: CFrameValue;
							["FLeg.L_Initial"]: CFrameValue;
							["FLeg.L_end_Initial"]: CFrameValue;
							MammuthFossil_Original: CFrameValue;
							["BLeg.R_end_Composited"]: CFrameValue;
							["FLeg.R_end_Initial"]: CFrameValue;
							["FLeg.R_end_Composited"]: CFrameValue;
							["FLeg.R_Initial"]: CFrameValue;
							["FLeg.L_end_Composited"]: CFrameValue;
							["FLeg.L_end_Original"]: CFrameValue;
							CuerpoEsq_Composited: CFrameValue;
							MammuthFossil_Initial: CFrameValue;
							["FLeg.R_Original"]: CFrameValue;
							["tronk.002_Initial"]: CFrameValue;
							["BLeg.L_Original"]: CFrameValue;
							["tail.003_Initial"]: CFrameValue;
							["FLeg.L_Original"]: CFrameValue;
							["BLeg.R_end_Initial"]: CFrameValue;
							CuerpoEsq_Initial: CFrameValue;
							tail_Original: CFrameValue;
							Body_Original: CFrameValue;
							Rootpart_Initial: CFrameValue;
							["tail.005_Original"]: CFrameValue;
							Rootpart_Original: CFrameValue;
							["tail.003_Original"]: CFrameValue;
							Rootpart_Composited: CFrameValue;
							["BLeg.L_end_Composited"]: CFrameValue;
							["tail.005_Initial"]: CFrameValue;
							CuerpoEsq_Original: CFrameValue;
							["tail.001_Composited"]: CFrameValue;
							["tronk.002_Original"]: CFrameValue;
							["tail.001_Original"]: CFrameValue;
							["BLeg.R_Original"]: CFrameValue;
							tail_Composited: CFrameValue;
							tronk_Original: CFrameValue;
							Head_Composited: CFrameValue;
							["tail.006_end_Original"]: CFrameValue;
							["tail.004_Original"]: CFrameValue;
						};
						AnimSaves: Model & {
							["Mammoth Dig"]: KeyframeSequence;
							["Mammoth Idle"]: KeyframeSequence;
							["Mammoth Walk"]: KeyframeSequence & {
								End: Keyframe & {
									["FLeg.R_end"]: Pose;
									["FLeg.L_end"]: Pose;
									["BLeg.R_end"]: Pose;
									MammuthFossil: Pose;
									["tronk.003_end"]: Pose;
									["BLeg.L_end"]: Pose;
									CuerpoEsq: Pose & {
										Rootpart: Pose & {
											["BLeg.L"]: Pose;
											["FLeg.R"]: Pose;
											["FLeg.L"]: Pose;
											["BLeg.R"]: Pose;
											Body: Pose & {
												tail: Pose & {
													["tail.001"]: Pose & {
														["tail.002"]: Pose & {
															["tail.003"]: Pose & {
																["tail.004"]: Pose & {
																	["tail.005"]: Pose;
																};
															};
														};
													};
												};
												Head: Pose & {
													tronk: Pose & {
														["tronk.001"]: Pose & {
															["tronk.002"]: Pose & {
																["tronk.003"]: Pose;
															};
														};
													};
												};
											};
										};
									};
									["tail.006_end"]: Pose;
									["tail.006"]: Pose;
									RootNode: Pose;
								};
							};
						};
					};
					egg_stand: Model & {
						Egg: MeshPart;
						EggHolder: Model & {
							Part: Part & {
								Beam: Beam;
							};
							Model: Model & {
								["Mesh Parts"]: MeshPart;
								Model: Model;
							};
						};
						NeonLight: MeshPart;
						Screen: Part & {
							SurfaceGui: SurfaceGui & {
								TextLabel: TextLabel;
							};
						};
						Base: Model & {
							["Mesh Parts"]: MeshPart;
						};
						Light: MeshPart;
					};
				};
				["comissions pet, half due to issues"]: Folder & {
					breaded_dragon: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						["Bearded_Dragon_13.001"]: MeshPart & {
							RootPart: Bone & {
								Body: Bone & {
									BFoot_R: Bone;
									BFoot_L: Bone;
									Head: Bone;
									FFoot_R: Bone;
									FFoot_L: Bone;
									Tail_01: Bone & {
										Tail_02: Bone & {
											Tail_03: Bone & {
												Tail_04: Bone & {
													Tail_05: Bone & {
														Tail_06: Bone & {
															Tail_07: Bone & {
																Tail_08: Bone & {
																	Tail_09: Bone & {
																		Tail_10: Bone & {
																			Tail_11: Bone;
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
						InitialPoses: Folder & {
							Head_Original: CFrameValue;
							Tail_11_Composited: CFrameValue;
							Bearded_Dragon_13_Composited: CFrameValue;
							Tail_01_Original: CFrameValue;
							Bearded_Dragon_13_Initial: CFrameValue;
							RootPart_Original: CFrameValue;
							BFoot_end_R_Original: CFrameValue;
							BFoot_end_L_Original: CFrameValue;
							Tail_04_Original: CFrameValue;
							FFoot_end_R_Original: CFrameValue;
							FFoot_end_L_Original: CFrameValue;
							Tail_03_Initial: CFrameValue;
							Tail_09_Composited: CFrameValue;
							Tail_05_Initial: CFrameValue;
							Tail_10_Composited: CFrameValue;
							Tail_06_Original: CFrameValue;
							BFoot_R_Original: CFrameValue;
							Tail_07_Initial: CFrameValue;
							Tail_02_Original: CFrameValue;
							Tail_05_Original: CFrameValue;
							BFoot_end_R_end_Initial: CFrameValue;
							FFoot_R_Initial: CFrameValue;
							Tail_09_Original: CFrameValue;
							FFoot_end_R_end_Initial: CFrameValue;
							FFoot_R_Composited: CFrameValue;
							Head_Composited: CFrameValue;
							Body_Initial: CFrameValue;
							Tail_05_Composited: CFrameValue;
							BFoot_end_L_end_Initial: CFrameValue;
							["Bearded_Dragon_13.001_Initial"]: CFrameValue;
							Tail_08_Composited: CFrameValue;
							Head_end_Initial: CFrameValue;
							Tail_10_Original: CFrameValue;
							Tail_08_Original: CFrameValue;
							BFoot_end_R_Composited: CFrameValue;
							Body_Original: CFrameValue;
							Tail_01_Initial: CFrameValue;
							["Bearded_Dragon_13.001_Composited"]: CFrameValue;
							FFoot_end_L_end_Initial: CFrameValue;
							FFoot_end_L_end_Original: CFrameValue;
							FFoot_end_L_end_Composited: CFrameValue;
							FFoot_end_L_Initial: CFrameValue;
							Head_end_Composited: CFrameValue;
							FFoot_R_Original: CFrameValue;
							FFoot_end_R_Composited: CFrameValue;
							Tail_08_Initial: CFrameValue;
							FFoot_L_Initial: CFrameValue;
							FFoot_L_Original: CFrameValue;
							joint10_end_Initial: CFrameValue;
							joint10_Initial: CFrameValue;
							FFoot_L_Composited: CFrameValue;
							BFoot_end_L_end_Original: CFrameValue;
							BFoot_end_L_end_Composited: CFrameValue;
							BFoot_end_L_Initial: CFrameValue;
							joint10_Original: CFrameValue;
							BFoot_L_Initial: CFrameValue;
							BFoot_L_Original: CFrameValue;
							RootPart_Composited: CFrameValue;
							BFoot_L_Composited: CFrameValue;
							BFoot_end_R_end_Original: CFrameValue;
							Tail_11_Initial: CFrameValue;
							Tail_04_Initial: CFrameValue;
							Tail_03_Original: CFrameValue;
							Bearded_Dragon_13_Original: CFrameValue;
							joint10_Composited: CFrameValue;
							Tail_06_Initial: CFrameValue;
							Tail_01_Composited: CFrameValue;
							BFoot_R_Initial: CFrameValue;
							Tail_07_Composited: CFrameValue;
							Tail_06_Composited: CFrameValue;
							RootPart_Initial: CFrameValue;
							BFoot_R_Composited: CFrameValue;
							Head_Initial: CFrameValue;
							Tail_10_Initial: CFrameValue;
							Tail_07_Original: CFrameValue;
							FFoot_end_R_end_Original: CFrameValue;
							Tail_04_Composited: CFrameValue;
							Body_Composited: CFrameValue;
							Tail_03_Composited: CFrameValue;
							Tail_02_Composited: CFrameValue;
							Tail_11_Original: CFrameValue;
							["Bearded_Dragon_13.001_Original"]: CFrameValue;
							joint10_end_Original: CFrameValue;
							Tail_02_Initial: CFrameValue;
							Head_end_Original: CFrameValue;
							FFoot_end_L_Composited: CFrameValue;
							FFoot_end_R_Initial: CFrameValue;
							joint10_end_Composited: CFrameValue;
							FFoot_end_R_end_Composited: CFrameValue;
							BFoot_end_L_Composited: CFrameValue;
							BFoot_end_R_Initial: CFrameValue;
							Tail_09_Initial: CFrameValue;
							BFoot_end_R_end_Composited: CFrameValue;
						};
						AnimSaves: ObjectValue & {
							digging: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									BFoot_end_R: Pose;
									joint10: Pose;
									BFoot_end_L: Pose;
									["Bearded_Dragon_13.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												BFoot_R: Pose;
												BFoot_L: Pose;
												Tail_01: Pose & {
													Tail_02: Pose & {
														Tail_03: Pose & {
															Tail_04: Pose & {
																Tail_05: Pose & {
																	Tail_06: Pose & {
																		Tail_07: Pose & {
																			Tail_08: Pose & {
																				Tail_09: Pose & {
																					Tail_10: Pose & {
																						Tail_11: Pose;
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
												FFoot_R: Pose;
												FFoot_L: Pose;
												Head: Pose;
											};
										};
									};
									FFoot_end_R: Pose;
									joint10_end: Pose;
									FFoot_end_L: Pose;
									Bearded_Dragon_13: Pose;
									FFoot_end_R_end: Pose;
									RootNode: Pose;
									BFoot_end_L_end: Pose;
									FFoot_end_L_end: Pose;
									BFoot_end_R_end: Pose;
								};
							};
							run: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									BFoot_end_R: Pose;
									joint10: Pose;
									BFoot_end_L: Pose;
									["Bearded_Dragon_13.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												BFoot_R: Pose;
												BFoot_L: Pose;
												Tail_01: Pose & {
													Tail_02: Pose & {
														Tail_03: Pose & {
															Tail_04: Pose & {
																Tail_05: Pose & {
																	Tail_06: Pose & {
																		Tail_07: Pose & {
																			Tail_08: Pose & {
																				Tail_09: Pose & {
																					Tail_10: Pose & {
																						Tail_11: Pose;
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
												FFoot_R: Pose;
												FFoot_L: Pose;
												Head: Pose;
											};
										};
									};
									FFoot_end_R: Pose;
									joint10_end: Pose;
									FFoot_end_L: Pose;
									Bearded_Dragon_13: Pose;
									FFoot_end_R_end: Pose;
									RootNode: Pose;
									BFoot_end_L_end: Pose;
									FFoot_end_L_end: Pose;
									BFoot_end_R_end: Pose;
								};
							};
							idle: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									BFoot_end_R: Pose;
									joint10: Pose;
									BFoot_end_L: Pose;
									["Bearded_Dragon_13.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												BFoot_R: Pose;
												BFoot_L: Pose;
												Tail_01: Pose & {
													Tail_02: Pose & {
														Tail_03: Pose & {
															Tail_04: Pose & {
																Tail_05: Pose & {
																	Tail_06: Pose & {
																		Tail_07: Pose & {
																			Tail_08: Pose & {
																				Tail_09: Pose & {
																					Tail_10: Pose & {
																						Tail_11: Pose;
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
												FFoot_R: Pose;
												FFoot_L: Pose;
												Head: Pose;
											};
										};
									};
									FFoot_end_R: Pose;
									joint10_end: Pose;
									FFoot_end_L: Pose;
									Bearded_Dragon_13: Pose;
									FFoot_end_R_end: Pose;
									RootNode: Pose;
									BFoot_end_L_end: Pose;
									FFoot_end_L_end: Pose;
									BFoot_end_R_end: Pose;
								};
							};
						};
					};
					spirit_owl: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						["Spirit_Owl_19.001"]: MeshPart & {
							RootPart: Bone & {
								Body: Bone & {
									Foot_L: Bone;
									Wing_R: Bone & {
										Wing_end_R: Bone;
									};
									Head: Bone;
									Foot_R: Bone;
									Wing_L: Bone & {
										Wing_end_L: Bone;
									};
								};
							};
						};
						InitialPoses: Folder & {
							Head_Original: CFrameValue;
							["Spirit_Owl_19.001_Initial"]: CFrameValue;
							Wing_R_Original: CFrameValue;
							Spirit_Owl_19_Composited: CFrameValue;
							Wing_end_R_Original: CFrameValue;
							Wing_end_R_Initial: CFrameValue;
							Wing_end_R_end_Initial: CFrameValue;
							Foot_end_R_end_Initial: CFrameValue;
							Head_end_Composited: CFrameValue;
							Body_Composited: CFrameValue;
							Foot_R_Composited: CFrameValue;
							["Spirit_Owl_19.001_Original"]: CFrameValue;
							["Spirit_Owl_19.001_Composited"]: CFrameValue;
							Spirit_Owl_19_Initial: CFrameValue;
							Foot_end_L_Initial: CFrameValue;
							Wing_end_L_Initial: CFrameValue;
							Foot_R_Original: CFrameValue;
							Spirit_Owl_19_Original: CFrameValue;
							RootPart_Composited: CFrameValue;
							Wing_end_L_end_Initial: CFrameValue;
							Wing_end_L_end_Original: CFrameValue;
							Foot_L_Original: CFrameValue;
							Wing_end_L_Original: CFrameValue;
							Wing_end_R_end_Composited: CFrameValue;
							Wing_end_L_Composited: CFrameValue;
							Foot_end_R_Composited: CFrameValue;
							Wing_L_Initial: CFrameValue;
							Wing_L_Original: CFrameValue;
							Foot_end_R_end_Original: CFrameValue;
							Head_Initial: CFrameValue;
							Foot_L_Initial: CFrameValue;
							Foot_R_Initial: CFrameValue;
							Foot_end_R_Initial: CFrameValue;
							Foot_end_L_end_Initial: CFrameValue;
							Wing_end_R_end_Original: CFrameValue;
							Foot_end_L_end_Original: CFrameValue;
							Wing_end_R_Composited: CFrameValue;
							Foot_end_L_end_Composited: CFrameValue;
							Foot_end_L_Original: CFrameValue;
							Foot_end_R_end_Composited: CFrameValue;
							Foot_end_L_Composited: CFrameValue;
							Wing_end_L_end_Composited: CFrameValue;
							Head_Composited: CFrameValue;
							Body_Initial: CFrameValue;
							Foot_L_Composited: CFrameValue;
							Head_end_Original: CFrameValue;
							Wing_R_Initial: CFrameValue;
							Body_Original: CFrameValue;
							RootPart_Initial: CFrameValue;
							Head_end_Initial: CFrameValue;
							Foot_end_R_Original: CFrameValue;
							RootPart_Original: CFrameValue;
							Wing_L_Composited: CFrameValue;
							Wing_R_Composited: CFrameValue;
						};
						AnimSaves: ObjectValue & {
							DIGING: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									Spirit_Owl_19: Pose;
									Wing_end_R_end: Pose;
									Foot_end_R_end: Pose;
									Foot_end_R: Pose;
									Foot_end_L: Pose;
									Foot_end_L_end: Pose;
									["Spirit_Owl_19.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												Wing_L: Pose & {
													Wing_end_L: Pose;
												};
												Wing_R: Pose & {
													Wing_end_R: Pose;
												};
												Head: Pose;
												Foot_R: Pose;
												Foot_L: Pose;
											};
										};
									};
									Wing_end_L_end: Pose;
									RootNode: Pose;
								};
							};
							idle: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									Spirit_Owl_19: Pose;
									Wing_end_R_end: Pose;
									Foot_end_R_end: Pose;
									Foot_end_R: Pose;
									Foot_end_L: Pose;
									Foot_end_L_end: Pose;
									["Spirit_Owl_19.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												Wing_L: Pose & {
													Wing_end_L: Pose;
												};
												Wing_R: Pose & {
													Wing_end_R: Pose;
												};
												Head: Pose;
												Foot_R: Pose;
												Foot_L: Pose;
											};
										};
									};
									Wing_end_L_end: Pose;
									RootNode: Pose;
								};
							};
							run: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									Spirit_Owl_19: Pose;
									Wing_end_R_end: Pose;
									Foot_end_R_end: Pose;
									Foot_end_R: Pose;
									Foot_end_L: Pose;
									Foot_end_L_end: Pose;
									["Spirit_Owl_19.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												Wing_L: Pose & {
													Wing_end_L: Pose;
												};
												Wing_R: Pose & {
													Wing_end_R: Pose;
												};
												Head: Pose;
												Foot_R: Pose;
												Foot_L: Pose;
											};
										};
									};
									Wing_end_L_end: Pose;
									RootNode: Pose;
								};
							};
						};
					};
					castoroide: Model & {
						["Castoroides_1.001"]: MeshPart & {
							RootPart: Bone & {
								Body: Bone & {
									BFoot_R: Bone;
									BFoot_L: Bone;
									Tail_01: Bone & {
										Tail_02: Bone & {
											Tail_03: Bone;
										};
									};
									FFoot_R: Bone;
									FFoot_L: Bone;
									Heat: Bone;
								};
							};
						};
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						InitialPoses: Folder & {
							Heat_end_Original: CFrameValue;
							Tail_01_Original: CFrameValue;
							Tail_03_end_Initial: CFrameValue;
							Heat_end_Initial: CFrameValue;
							RootPart_Original: CFrameValue;
							BFoot_end_R_Original: CFrameValue;
							FFoot_L_Original: CFrameValue;
							FFoot_end_R_Original: CFrameValue;
							FFoot_end_L_Original: CFrameValue;
							Tail_03_end_Original: CFrameValue;
							Tail_03_Initial: CFrameValue;
							FFoot_R_Original: CFrameValue;
							BFoot_R_Original: CFrameValue;
							BFoot_end_R_end_Original: CFrameValue;
							BFoot_L_Composited: CFrameValue;
							BFoot_end_R_end_Initial: CFrameValue;
							FFoot_R_Initial: CFrameValue;
							BFoot_L_Original: CFrameValue;
							FFoot_end_R_end_Initial: CFrameValue;
							BFoot_L_Initial: CFrameValue;
							Heat_Original: CFrameValue;
							BFoot_R_Composited: CFrameValue;
							Body_Initial: CFrameValue;
							BFoot_end_L_end_Initial: CFrameValue;
							Castoroides_1_Composited: CFrameValue;
							FFoot_end_R_end_Original: CFrameValue;
							Castoroides_1_Initial: CFrameValue;
							BFoot_end_R_Composited: CFrameValue;
							Body_Original: CFrameValue;
							FFoot_end_R_Composited: CFrameValue;
							Tail_02_Composited: CFrameValue;
							Tail_01_Initial: CFrameValue;
							RootPart_Composited: CFrameValue;
							["Castoroides_1.001_Initial"]: CFrameValue;
							FFoot_end_L_end_Composited: CFrameValue;
							Tail_03_end_Composited: CFrameValue;
							["Castoroides_1.001_Original"]: CFrameValue;
							["Castoroides_1.001_Composited"]: CFrameValue;
							BFoot_end_L_end_Original: CFrameValue;
							Tail_01_Composited: CFrameValue;
							BFoot_end_L_Original: CFrameValue;
							Heat_Initial: CFrameValue;
							BFoot_end_L_Initial: CFrameValue;
							RootPart_Initial: CFrameValue;
							Body_Composited: CFrameValue;
							BFoot_R_Initial: CFrameValue;
							Tail_03_Original: CFrameValue;
							Tail_02_Original: CFrameValue;
							FFoot_end_L_end_Initial: CFrameValue;
							FFoot_end_L_end_Original: CFrameValue;
							Heat_end_Composited: CFrameValue;
							Tail_03_Composited: CFrameValue;
							FFoot_end_L_Initial: CFrameValue;
							BFoot_end_L_end_Composited: CFrameValue;
							FFoot_L_Initial: CFrameValue;
							FFoot_L_Composited: CFrameValue;
							Tail_02_Initial: CFrameValue;
							FFoot_R_Composited: CFrameValue;
							FFoot_end_L_Composited: CFrameValue;
							FFoot_end_R_Initial: CFrameValue;
							BFoot_end_L_Composited: CFrameValue;
							FFoot_end_R_end_Composited: CFrameValue;
							Castoroides_1_Original: CFrameValue;
							Heat_Composited: CFrameValue;
							BFoot_end_R_Initial: CFrameValue;
							BFoot_end_R_end_Composited: CFrameValue;
						};
						AnimSaves: ObjectValue & {
							DIGGING: KeyframeSequence & {
								End: Keyframe & {
									BFoot_end_R: Pose;
									Castoroides_1: Pose;
									BFoot_end_L: Pose;
									Heat_end: Pose;
									FFoot_end_R: Pose;
									["Castoroides_1.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												BFoot_R: Pose;
												BFoot_L: Pose;
												Tail_01: Pose & {
													Tail_02: Pose & {
														Tail_03: Pose;
													};
												};
												FFoot_R: Pose;
												FFoot_L: Pose;
												Heat: Pose;
											};
										};
									};
									FFoot_end_L: Pose;
									BFoot_end_L_end: Pose;
									FFoot_end_R_end: Pose;
									FFoot_end_L_end: Pose;
									Tail_03_end: Pose;
									BFoot_end_R_end: Pose;
									RootNode: Pose;
								};
							};
							run: KeyframeSequence;
							idle: KeyframeSequence & {
								End: Keyframe & {
									["Castoroides_1.001"]: Pose & {
										Null: IntValue;
										RootPart: Pose & {
											Body: Pose & {
												BFoot_R: Pose;
												BFoot_L: Pose;
												Tail_01: Pose & {
													Tail_02: Pose & {
														Tail_03: Pose;
													};
												};
												FFoot_R: Pose;
												FFoot_L: Pose;
												Heat: Pose;
											};
										};
									};
								};
							};
						};
					};
					glypto: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						["Glyptodon_3.001"]: MeshPart & {
							RootPart: Bone & {
								Body: Bone & {
									BFoot_R: Bone;
									BFoot_L: Bone;
									Tail_01: Bone & {
										Tail_02: Bone & {
											Tail_03: Bone;
										};
									};
									FFoot_R: Bone;
									FFoot_L: Bone;
									Head: Bone;
								};
							};
						};
						InitialPoses: Folder & {
							Head_Original: CFrameValue;
							["FFoot.R_end.001_Original"]: CFrameValue;
							Glyptodon_3_Original: CFrameValue;
							Tail_01_Original: CFrameValue;
							Tail_03_end_Initial: CFrameValue;
							RootPart_Original: CFrameValue;
							["BFoot.R_end.001_Original"]: CFrameValue;
							FFoot_L_Original: CFrameValue;
							["FFoot.R_end.001_Composited"]: CFrameValue;
							["FFoot.R_end.001_end_Initial"]: CFrameValue;
							["BFoot.R_end.001_Composited"]: CFrameValue;
							Tail_03_Initial: CFrameValue;
							Glyptodon_3_Initial: CFrameValue;
							["Glyptodon_3.001_Composited"]: CFrameValue;
							FFoot_R_Original: CFrameValue;
							BFoot_R_Original: CFrameValue;
							Head_Initial: CFrameValue;
							BFoot_L_Composited: CFrameValue;
							FFoot_R_Initial: CFrameValue;
							BFoot_L_Original: CFrameValue;
							FFoot_R_Composited: CFrameValue;
							["FFoot.R_end_end_Original"]: CFrameValue;
							Body_Initial: CFrameValue;
							Tail_03_end_Composited: CFrameValue;
							Head_end_Initial: CFrameValue;
							["FFoot.R_end_Original"]: CFrameValue;
							["FFoot.R_end.001_end_Composited"]: CFrameValue;
							Body_Original: CFrameValue;
							["BFoot.R_end_Composited"]: CFrameValue;
							["BFoot.R_end.001_end_Composited"]: CFrameValue;
							["BFoot.R_end_Initial"]: CFrameValue;
							["FFoot.R_end_Composited"]: CFrameValue;
							["FFoot.R_end_Initial"]: CFrameValue;
							Head_end_Composited: CFrameValue;
							Body_Composited: CFrameValue;
							BFoot_R_Initial: CFrameValue;
							Tail_01_Initial: CFrameValue;
							RootPart_Composited: CFrameValue;
							["BFoot.R_end_Original"]: CFrameValue;
							["FFoot.R_end_end_Initial"]: CFrameValue;
							["BFoot.R_end_end_Initial"]: CFrameValue;
							["Glyptodon_3.001_Initial"]: CFrameValue;
							["Glyptodon_3.001_Original"]: CFrameValue;
							["FFoot.R_end_end_Composited"]: CFrameValue;
							FFoot_L_Composited: CFrameValue;
							FFoot_L_Initial: CFrameValue;
							Tail_03_Original: CFrameValue;
							["BFoot.R_end_end_Composited"]: CFrameValue;
							Glyptodon_3_Composited: CFrameValue;
							["FFoot.R_end.001_end_Original"]: CFrameValue;
							Tail_02_Composited: CFrameValue;
							Tail_03_Composited: CFrameValue;
							["BFoot.R_end.001_end_Initial"]: CFrameValue;
							["FFoot.R_end.001_Initial"]: CFrameValue;
							Tail_03_end_Original: CFrameValue;
							["BFoot.R_end.001_end_Original"]: CFrameValue;
							Tail_02_Initial: CFrameValue;
							Head_end_Original: CFrameValue;
							["BFoot.R_end.001_Initial"]: CFrameValue;
							BFoot_L_Initial: CFrameValue;
							Tail_02_Original: CFrameValue;
							Tail_01_Composited: CFrameValue;
							RootPart_Initial: CFrameValue;
							["BFoot.R_end_end_Original"]: CFrameValue;
							Head_Composited: CFrameValue;
							BFoot_R_Composited: CFrameValue;
						};
						AnimSaves: ObjectValue & {
							digging: KeyframeSequence & {
								End: Keyframe & {
									["BFoot.R_end.001_end"]: Pose;
									["FFoot.R_end"]: Pose;
									["FFoot.R_end.001_end"]: Pose;
									["BFoot.R_end_end"]: Pose;
									["FFoot.R_end.001"]: Pose;
									Glyptodon_3: Pose;
									["BFoot.R_end.001"]: Pose;
									["Glyptodon_3.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												BFoot_R: Pose;
												BFoot_L: Pose;
												Tail_01: Pose & {
													Tail_02: Pose & {
														Tail_03: Pose;
													};
												};
												FFoot_R: Pose;
												FFoot_L: Pose;
												Head: Pose;
											};
										};
									};
									Tail_03_end: Pose;
									Head_end: Pose;
									["BFoot.R_end"]: Pose;
									["FFoot.R_end_end"]: Pose;
									RootNode: Pose;
								};
							};
							run: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									["FFoot.R_end"]: Pose;
									["FFoot.R_end.001_end"]: Pose;
									["BFoot.R_end_end"]: Pose;
									Tail_03_end: Pose;
									Glyptodon_3: Pose;
									["BFoot.R_end.001_end"]: Pose;
									["Glyptodon_3.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												BFoot_R: Pose;
												BFoot_L: Pose;
												Tail_01: Pose & {
													Tail_02: Pose & {
														Tail_03: Pose;
													};
												};
												FFoot_R: Pose;
												FFoot_L: Pose;
												Head: Pose;
											};
										};
									};
									["BFoot.R_end.001"]: Pose;
									["FFoot.R_end.001"]: Pose;
									["BFoot.R_end"]: Pose;
									["FFoot.R_end_end"]: Pose;
									RootNode: Pose;
								};
							};
							idle: KeyframeSequence & {
								End: Keyframe & {
									["BFoot.R_end.001_end"]: Pose;
									["FFoot.R_end"]: Pose;
									["FFoot.R_end.001_end"]: Pose;
									["BFoot.R_end_end"]: Pose;
									["FFoot.R_end.001"]: Pose;
									Glyptodon_3: Pose;
									["BFoot.R_end.001"]: Pose;
									["Glyptodon_3.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												BFoot_R: Pose;
												BFoot_L: Pose;
												Tail_01: Pose & {
													Tail_02: Pose & {
														Tail_03: Pose;
													};
												};
												FFoot_R: Pose;
												FFoot_L: Pose;
												Head: Pose;
											};
										};
									};
									Tail_03_end: Pose;
									Head_end: Pose;
									["BFoot.R_end"]: Pose;
									["FFoot.R_end_end"]: Pose;
									RootNode: Pose;
								};
							};
						};
					};
					sphynx: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						["Sphinx_16.001"]: MeshPart & {
							RootPart: Bone & {
								Body: Bone & {
									BFoot_R: Bone;
									BFoot_L: Bone;
									Head: Bone;
									FFoot_R: Bone;
									FFoot_L: Bone;
									Tail_01: Bone & {
										Tail_02: Bone & {
											Tail_03: Bone;
										};
									};
								};
							};
						};
						InitialPoses: Folder & {
							Head_Original: CFrameValue;
							Tail_01_Original: CFrameValue;
							Tail_03_end_Initial: CFrameValue;
							RootPart_Original: CFrameValue;
							BFoot_end_R_Original: CFrameValue;
							FFoot_L_Original: CFrameValue;
							FFoot_end_R_Original: CFrameValue;
							FFoot_end_L_Original: CFrameValue;
							Tail_03_end_Original: CFrameValue;
							Tail_03_Initial: CFrameValue;
							Sphinx_16_Composited: CFrameValue;
							FFoot_R_Original: CFrameValue;
							BFoot_R_Original: CFrameValue;
							Head_Initial: CFrameValue;
							Tail_01_Composited: CFrameValue;
							BFoot_end_R_end_Initial: CFrameValue;
							FFoot_R_Initial: CFrameValue;
							BFoot_L_Original: CFrameValue;
							FFoot_end_R_end_Initial: CFrameValue;
							FFoot_R_Composited: CFrameValue;
							Head_Composited: CFrameValue;
							Body_Initial: CFrameValue;
							Tail_03_end_Composited: CFrameValue;
							Head_end_Initial: CFrameValue;
							Sphinx_16_Initial: CFrameValue;
							Sphinx_16_Original: CFrameValue;
							BFoot_end_R_Composited: CFrameValue;
							Body_Original: CFrameValue;
							Head_end_Composited: CFrameValue;
							Body_Composited: CFrameValue;
							BFoot_R_Initial: CFrameValue;
							Tail_01_Initial: CFrameValue;
							RootPart_Composited: CFrameValue;
							["Sphinx_16.001_Initial"]: CFrameValue;
							FFoot_end_L_end_Composited: CFrameValue;
							["Sphinx_16.001_Original"]: CFrameValue;
							["Sphinx_16.001_Composited"]: CFrameValue;
							BFoot_end_L_end_Initial: CFrameValue;
							BFoot_end_L_end_Original: CFrameValue;
							BFoot_end_L_end_Composited: CFrameValue;
							BFoot_end_L_Initial: CFrameValue;
							BFoot_end_L_Original: CFrameValue;
							FFoot_end_R_Composited: CFrameValue;
							RootPart_Initial: CFrameValue;
							Tail_02_Composited: CFrameValue;
							BFoot_L_Initial: CFrameValue;
							Tail_03_Original: CFrameValue;
							BFoot_L_Composited: CFrameValue;
							FFoot_end_L_end_Initial: CFrameValue;
							FFoot_end_L_end_Original: CFrameValue;
							FFoot_end_L_Initial: CFrameValue;
							Tail_03_Composited: CFrameValue;
							FFoot_end_R_end_Original: CFrameValue;
							FFoot_L_Initial: CFrameValue;
							FFoot_L_Composited: CFrameValue;
							BFoot_end_R_end_Original: CFrameValue;
							Tail_02_Initial: CFrameValue;
							Head_end_Original: CFrameValue;
							FFoot_end_L_Composited: CFrameValue;
							FFoot_end_R_Initial: CFrameValue;
							Tail_02_Original: CFrameValue;
							FFoot_end_R_end_Composited: CFrameValue;
							BFoot_end_L_Composited: CFrameValue;
							BFoot_end_R_Initial: CFrameValue;
							BFoot_R_Composited: CFrameValue;
							BFoot_end_R_end_Composited: CFrameValue;
						};
						AnimSaves: ObjectValue & {
							digging: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									BFoot_end_R: Pose;
									BFoot_end_L: Pose;
									BFoot_end_R_end: Pose;
									FFoot_end_R: Pose;
									BFoot_end_L_end: Pose;
									FFoot_end_L: Pose;
									Sphinx_16: Pose;
									FFoot_end_R_end: Pose;
									FFoot_end_L_end: Pose;
									Tail_03_end: Pose;
									["Sphinx_16.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												BFoot_R: Pose;
												BFoot_L: Pose;
												Tail_01: Pose & {
													Tail_02: Pose & {
														Tail_03: Pose;
													};
												};
												FFoot_R: Pose;
												FFoot_L: Pose;
												Head: Pose;
											};
										};
									};
									RootNode: Pose;
								};
							};
							run: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									BFoot_end_R: Pose;
									BFoot_end_L: Pose;
									BFoot_end_R_end: Pose;
									FFoot_end_R: Pose;
									BFoot_end_L_end: Pose;
									FFoot_end_L: Pose;
									Sphinx_16: Pose;
									FFoot_end_R_end: Pose;
									FFoot_end_L_end: Pose;
									Tail_03_end: Pose;
									["Sphinx_16.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												BFoot_R: Pose;
												BFoot_L: Pose;
												Tail_01: Pose & {
													Tail_02: Pose & {
														Tail_03: Pose;
													};
												};
												FFoot_R: Pose;
												FFoot_L: Pose;
												Head: Pose;
											};
										};
									};
									RootNode: Pose;
								};
							};
							idle: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									BFoot_end_L_end: Pose;
									BFoot_end_L: Pose;
									FFoot_end_L_end: Pose;
									FFoot_end_R: Pose;
									BFoot_end_R_end: Pose;
									FFoot_end_L: Pose;
									BFoot_end_R: Pose;
									FFoot_end_R_end: Pose;
									Sphinx_16: Pose;
									Tail_03_end: Pose;
									["Sphinx_16.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												BFoot_R: Pose;
												BFoot_L: Pose;
												Tail_01: Pose & {
													Tail_02: Pose & {
														Tail_03: Pose;
													};
												};
												FFoot_R: Pose;
												FFoot_L: Pose;
												Head: Pose;
											};
										};
									};
									RootNode: Pose;
								};
							};
						};
					};
					dessert_leon: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						["Leon_Desert_12.001"]: MeshPart & {
							RootPart: Bone & {
								Body: Bone & {
									BFoot_R: Bone;
									BFoot_L: Bone;
									Head: Bone;
									FFoot_R: Bone;
									FFoot_L: Bone;
									Tail_01: Bone & {
										Tail_02: Bone & {
											Tail_03: Bone;
										};
									};
								};
							};
						};
						InitialPoses: Folder & {
							Head_Original: CFrameValue;
							Tail_01_Original: CFrameValue;
							Tail_03_end_Initial: CFrameValue;
							Leon_Desert_12_Initial: CFrameValue;
							RootPart_Original: CFrameValue;
							BFoot_end_R_Original: CFrameValue;
							FFoot_L_Original: CFrameValue;
							FFoot_end_R_Original: CFrameValue;
							FFoot_end_L_Original: CFrameValue;
							Tail_03_end_Original: CFrameValue;
							Tail_03_Initial: CFrameValue;
							FFoot_R_Original: CFrameValue;
							BFoot_R_Original: CFrameValue;
							Head_Initial: CFrameValue;
							Tail_01_Composited: CFrameValue;
							BFoot_end_R_end_Initial: CFrameValue;
							FFoot_R_Initial: CFrameValue;
							BFoot_L_Original: CFrameValue;
							FFoot_end_R_end_Initial: CFrameValue;
							FFoot_R_Composited: CFrameValue;
							Head_Composited: CFrameValue;
							Body_Initial: CFrameValue;
							Tail_03_end_Composited: CFrameValue;
							Head_end_Initial: CFrameValue;
							["Leon_Desert_12.001_Initial"]: CFrameValue;
							BFoot_end_R_Composited: CFrameValue;
							Body_Original: CFrameValue;
							["Leon_Desert_12.001_Original"]: CFrameValue;
							Head_end_Composited: CFrameValue;
							FFoot_end_R_Composited: CFrameValue;
							BFoot_R_Initial: CFrameValue;
							Tail_01_Initial: CFrameValue;
							RootPart_Composited: CFrameValue;
							["Leon_Desert_12.001_Composited"]: CFrameValue;
							FFoot_end_L_end_Composited: CFrameValue;
							FFoot_end_L_end_Initial: CFrameValue;
							FFoot_end_L_end_Original: CFrameValue;
							FFoot_end_L_Initial: CFrameValue;
							BFoot_end_L_end_Original: CFrameValue;
							FFoot_L_Composited: CFrameValue;
							FFoot_end_L_Composited: CFrameValue;
							Body_Composited: CFrameValue;
							Tail_02_Composited: CFrameValue;
							RootPart_Initial: CFrameValue;
							BFoot_end_L_Original: CFrameValue;
							FFoot_L_Initial: CFrameValue;
							Tail_03_Original: CFrameValue;
							BFoot_end_L_end_Initial: CFrameValue;
							BFoot_end_L_end_Composited: CFrameValue;
							BFoot_end_L_Initial: CFrameValue;
							BFoot_L_Initial: CFrameValue;
							Tail_03_Composited: CFrameValue;
							BFoot_R_Composited: CFrameValue;
							Leon_Desert_12_Original: CFrameValue;
							BFoot_L_Composited: CFrameValue;
							BFoot_end_R_end_Original: CFrameValue;
							Tail_02_Initial: CFrameValue;
							Head_end_Original: CFrameValue;
							Leon_Desert_12_Composited: CFrameValue;
							FFoot_end_R_Initial: CFrameValue;
							Tail_02_Original: CFrameValue;
							FFoot_end_R_end_Composited: CFrameValue;
							BFoot_end_L_Composited: CFrameValue;
							BFoot_end_R_Initial: CFrameValue;
							FFoot_end_R_end_Original: CFrameValue;
							BFoot_end_R_end_Composited: CFrameValue;
						};
						AnimSaves: ObjectValue & {
							digging: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									BFoot_end_L_end: Pose;
									BFoot_end_L: Pose;
									Leon_Desert_12: Pose;
									FFoot_end_R: Pose;
									FFoot_end_L_end: Pose;
									FFoot_end_L: Pose;
									["Leon_Desert_12.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												BFoot_R: Pose;
												BFoot_L: Pose;
												Tail_01: Pose & {
													Tail_02: Pose & {
														Tail_03: Pose;
													};
												};
												FFoot_R: Pose;
												FFoot_L: Pose;
												Head: Pose;
											};
										};
									};
									FFoot_end_R_end: Pose;
									BFoot_end_R_end: Pose;
									Tail_03_end: Pose;
									BFoot_end_R: Pose;
									RootNode: Pose;
								};
							};
							idle: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									BFoot_end_L_end: Pose;
									BFoot_end_L: Pose;
									Leon_Desert_12: Pose;
									FFoot_end_R: Pose;
									FFoot_end_L_end: Pose;
									FFoot_end_L: Pose;
									["Leon_Desert_12.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												BFoot_R: Pose;
												BFoot_L: Pose;
												Tail_01: Pose & {
													Tail_02: Pose & {
														Tail_03: Pose;
													};
												};
												FFoot_R: Pose;
												FFoot_L: Pose;
												Head: Pose;
											};
										};
									};
									FFoot_end_R_end: Pose;
									BFoot_end_R_end: Pose;
									Tail_03_end: Pose;
									BFoot_end_R: Pose;
									RootNode: Pose;
								};
							};
							run: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									BFoot_end_L_end: Pose;
									BFoot_end_L: Pose;
									Leon_Desert_12: Pose;
									FFoot_end_R: Pose;
									BFoot_end_R: Pose;
									FFoot_end_L: Pose;
									["Leon_Desert_12.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												BFoot_R: Pose;
												BFoot_L: Pose;
												Tail_01: Pose & {
													Tail_02: Pose & {
														Tail_03: Pose;
													};
												};
												FFoot_R: Pose;
												FFoot_L: Pose;
												Head: Pose;
											};
										};
									};
									FFoot_end_R_end: Pose;
									BFoot_end_R_end: Pose;
									Tail_03_end: Pose;
									FFoot_end_L_end: Pose;
									RootNode: Pose;
								};
							};
						};
					};
					anubiss: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						["Anubis_17.001"]: MeshPart & {
							RootPart: Bone & {
								Body: Bone & {
									Foot_L: Bone;
									Hand_R: Bone;
									Hand_L: Bone;
									Foot_R: Bone;
									Neck: Bone & {
										Head: Bone;
									};
								};
							};
						};
						InitialPoses: Folder & {
							Head_Original: CFrameValue;
							Neck_Original: CFrameValue;
							Hand_end_R_end_Original: CFrameValue;
							Body_Original: CFrameValue;
							Hand_end_R_end_Initial: CFrameValue;
							Anubis_17_Original: CFrameValue;
							Foot_end_R_end_Initial: CFrameValue;
							Head_end_Composited: CFrameValue;
							Body_Composited: CFrameValue;
							Foot_R_Composited: CFrameValue;
							Hand_end_R_Initial: CFrameValue;
							["Anubis_17.001_Original"]: CFrameValue;
							["Anubis_17.001_Composited"]: CFrameValue;
							Foot_end_L_end_Composited: CFrameValue;
							Foot_end_L_end_Original: CFrameValue;
							Hand_R_Original: CFrameValue;
							Foot_end_L_end_Initial: CFrameValue;
							Foot_end_L_Initial: CFrameValue;
							Foot_end_L_Original: CFrameValue;
							Foot_R_Original: CFrameValue;
							Hand_end_L_end_Composited: CFrameValue;
							RootPart_Composited: CFrameValue;
							Neck_Initial: CFrameValue;
							Foot_end_L_Composited: CFrameValue;
							Hand_end_R_end_Composited: CFrameValue;
							Foot_L_Original: CFrameValue;
							Foot_L_Composited: CFrameValue;
							Hand_L_Original: CFrameValue;
							Foot_end_R_Composited: CFrameValue;
							Hand_R_Composited: CFrameValue;
							Hand_end_L_Initial: CFrameValue;
							Foot_end_R_end_Original: CFrameValue;
							Head_Initial: CFrameValue;
							Foot_L_Initial: CFrameValue;
							Foot_R_Initial: CFrameValue;
							Foot_end_R_Initial: CFrameValue;
							Hand_L_Initial: CFrameValue;
							Hand_R_Initial: CFrameValue;
							Hand_end_L_end_Initial: CFrameValue;
							RootPart_Initial: CFrameValue;
							Hand_end_L_Original: CFrameValue;
							["Anubis_17.001_Initial"]: CFrameValue;
							Foot_end_R_end_Composited: CFrameValue;
							Hand_end_R_Composited: CFrameValue;
							Hand_end_L_end_Original: CFrameValue;
							Head_Composited: CFrameValue;
							Body_Initial: CFrameValue;
							Hand_L_Composited: CFrameValue;
							Head_end_Original: CFrameValue;
							RootPart_Original: CFrameValue;
							Anubis_17_Composited: CFrameValue;
							Neck_Composited: CFrameValue;
							Anubis_17_Initial: CFrameValue;
							Foot_end_R_Original: CFrameValue;
							Hand_end_L_Composited: CFrameValue;
							Head_end_Initial: CFrameValue;
							Hand_end_R_Original: CFrameValue;
						};
						AnimSaves: ObjectValue & {
							diging: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									Hand_end_R_end: Pose;
									Foot_end_R_end: Pose;
									Hand_end_R: Pose;
									Hand_end_L_end: Pose;
									["Anubis_17.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												Foot_L: Pose;
												Hand_R: Pose;
												Hand_L: Pose;
												Foot_R: Pose;
												Neck: Pose & {
													Head: Pose;
												};
											};
										};
									};
									Foot_end_L_end: Pose;
									Foot_end_L: Pose;
									Anubis_17: Pose;
									Hand_end_L: Pose;
									Foot_end_R: Pose;
									RootNode: Pose;
								};
							};
							idle: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									Hand_end_R_end: Pose;
									Foot_end_R_end: Pose;
									Hand_end_R: Pose;
									Hand_end_L_end: Pose;
									["Anubis_17.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												Foot_L: Pose;
												Hand_R: Pose;
												Hand_L: Pose;
												Foot_R: Pose;
												Neck: Pose & {
													Head: Pose;
												};
											};
										};
									};
									Foot_end_L_end: Pose;
									Foot_end_L: Pose;
									Anubis_17: Pose;
									Hand_end_L: Pose;
									Foot_end_R: Pose;
									RootNode: Pose;
								};
							};
							run: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									Hand_end_R_end: Pose;
									Foot_end_R_end: Pose;
									Hand_end_R: Pose;
									Hand_end_L_end: Pose;
									["Anubis_17.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												Foot_L: Pose;
												Hand_R: Pose;
												Hand_L: Pose;
												Foot_R: Pose;
												Neck: Pose & {
													Head: Pose;
												};
											};
										};
									};
									Foot_end_L_end: Pose;
									Foot_end_L: Pose;
									Anubis_17: Pose;
									Hand_end_L: Pose;
									Foot_end_R: Pose;
									RootNode: Pose;
								};
							};
						};
					};
					wolf: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						["Spirit_Wolf_20.001"]: MeshPart & {
							RootPart: Bone & {
								Body: Bone & {
									BFoot_R: Bone;
									BFoot_L: Bone;
									Head: Bone;
									FFoot_R: Bone;
									FFoot_L: Bone;
									Tail_01: Bone & {
										Tail_02: Bone & {
											Tail_03: Bone & {
												Tail_04: Bone & {
													Tail_05: Bone & {
														Tail_06: Bone;
													};
												};
											};
										};
									};
								};
							};
						};
						InitialPoses: Folder & {
							Head_Original: CFrameValue;
							Tail_07_Composited: CFrameValue;
							Tail_01_Original: CFrameValue;
							RootPart_Original: CFrameValue;
							["Spirit_Wolf_20.001_Original"]: CFrameValue;
							BFoot_end_R_Original: CFrameValue;
							FFoot_L_Original: CFrameValue;
							Tail_04_Original: CFrameValue;
							Tail_07_end_Composited: CFrameValue;
							FFoot_end_R_Original: CFrameValue;
							FFoot_end_L_Original: CFrameValue;
							Spirit_Wolf_20_Initial: CFrameValue;
							Tail_03_Initial: CFrameValue;
							Spirit_Wolf_20_Composited: CFrameValue;
							Tail_05_Initial: CFrameValue;
							FFoot_R_Original: CFrameValue;
							Tail_06_Original: CFrameValue;
							BFoot_R_Original: CFrameValue;
							Tail_07_Initial: CFrameValue;
							Tail_02_Original: CFrameValue;
							Tail_01_Composited: CFrameValue;
							BFoot_end_R_end_Initial: CFrameValue;
							FFoot_R_Initial: CFrameValue;
							BFoot_L_Original: CFrameValue;
							Spirit_Wolf_20_Original: CFrameValue;
							FFoot_end_R_end_Initial: CFrameValue;
							FFoot_R_Composited: CFrameValue;
							Head_Composited: CFrameValue;
							Body_Initial: CFrameValue;
							Tail_05_Composited: CFrameValue;
							BFoot_end_L_end_Initial: CFrameValue;
							Head_end_Initial: CFrameValue;
							Tail_06_Composited: CFrameValue;
							BFoot_end_R_Composited: CFrameValue;
							Body_Original: CFrameValue;
							Tail_07_end_Original: CFrameValue;
							Head_end_Composited: CFrameValue;
							FFoot_end_R_Composited: CFrameValue;
							BFoot_R_Initial: CFrameValue;
							Tail_01_Initial: CFrameValue;
							["Spirit_Wolf_20.001_Initial"]: CFrameValue;
							BFoot_end_L_Initial: CFrameValue;
							RootPart_Composited: CFrameValue;
							BFoot_end_L_end_Original: CFrameValue;
							BFoot_end_L_end_Composited: CFrameValue;
							Tail_07_end_Initial: CFrameValue;
							Tail_04_Initial: CFrameValue;
							["Spirit_Wolf_20.001_Composited"]: CFrameValue;
							BFoot_end_L_Original: CFrameValue;
							BFoot_R_Composited: CFrameValue;
							Tail_06_Initial: CFrameValue;
							BFoot_L_Initial: CFrameValue;
							BFoot_L_Composited: CFrameValue;
							FFoot_end_L_end_Initial: CFrameValue;
							FFoot_end_L_end_Original: CFrameValue;
							RootPart_Initial: CFrameValue;
							FFoot_end_L_end_Composited: CFrameValue;
							FFoot_end_L_Initial: CFrameValue;
							Tail_03_Original: CFrameValue;
							Tail_07_Original: CFrameValue;
							Tail_04_Composited: CFrameValue;
							FFoot_L_Initial: CFrameValue;
							FFoot_L_Composited: CFrameValue;
							Tail_03_Composited: CFrameValue;
							Body_Composited: CFrameValue;
							Tail_02_Composited: CFrameValue;
							BFoot_end_R_end_Original: CFrameValue;
							Head_Initial: CFrameValue;
							Tail_02_Initial: CFrameValue;
							Head_end_Original: CFrameValue;
							FFoot_end_L_Composited: CFrameValue;
							FFoot_end_R_Initial: CFrameValue;
							Tail_05_Original: CFrameValue;
							FFoot_end_R_end_Composited: CFrameValue;
							BFoot_end_L_Composited: CFrameValue;
							BFoot_end_R_Initial: CFrameValue;
							FFoot_end_R_end_Original: CFrameValue;
							BFoot_end_R_end_Composited: CFrameValue;
						};
						AnimSaves: ObjectValue & {
							DIGGING: KeyframeSequence & {
								End: Keyframe & {
									Spirit_Wolf_20: Pose;
									["Spirit_Wolf_20.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												BFoot_R: Pose;
												BFoot_L: Pose;
												Tail_01: Pose & {
													Tail_02: Pose & {
														Tail_03: Pose & {
															Tail_04: Pose & {
																Tail_05: Pose & {
																	Tail_06: Pose;
																};
															};
														};
													};
												};
												FFoot_R: Pose;
												FFoot_L: Pose;
												Head: Pose;
											};
										};
									};
									Tail_07_end: Pose;
									BFoot_end_L: Pose;
									FFoot_end_L_end: Pose;
									FFoot_end_R: Pose;
									BFoot_end_R: Pose;
									FFoot_end_L: Pose;
									BFoot_end_R_end: Pose;
									FFoot_end_R_end: Pose;
									Head_end: Pose;
									BFoot_end_L_end: Pose;
									Tail_07: Pose;
									RootNode: Pose;
								};
							};
							run: KeyframeSequence & {
								End: Keyframe & {
									Spirit_Wolf_20: Pose;
									["Spirit_Wolf_20.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												BFoot_R: Pose;
												BFoot_L: Pose;
												Tail_01: Pose & {
													Tail_02: Pose & {
														Tail_03: Pose & {
															Tail_04: Pose & {
																Tail_05: Pose & {
																	Tail_06: Pose;
																};
															};
														};
													};
												};
												FFoot_R: Pose;
												FFoot_L: Pose;
												Head: Pose;
											};
										};
									};
									Tail_07_end: Pose;
									BFoot_end_L: Pose;
									FFoot_end_L_end: Pose;
									FFoot_end_R: Pose;
									BFoot_end_R: Pose;
									FFoot_end_L: Pose;
									BFoot_end_R_end: Pose;
									FFoot_end_R_end: Pose;
									Head_end: Pose;
									BFoot_end_L_end: Pose;
									Tail_07: Pose;
									RootNode: Pose;
								};
							};
							idle: KeyframeSequence & {
								End: Keyframe & {
									Spirit_Wolf_20: Pose;
									["Spirit_Wolf_20.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												BFoot_R: Pose;
												BFoot_L: Pose;
												Tail_01: Pose & {
													Tail_02: Pose & {
														Tail_03: Pose & {
															Tail_04: Pose & {
																Tail_05: Pose & {
																	Tail_06: Pose;
																};
															};
														};
													};
												};
												FFoot_R: Pose;
												FFoot_L: Pose;
												Head: Pose;
											};
										};
									};
									Tail_07_end: Pose;
									BFoot_end_L: Pose;
									FFoot_end_L_end: Pose;
									FFoot_end_R: Pose;
									BFoot_end_R: Pose;
									FFoot_end_L: Pose;
									BFoot_end_R_end: Pose;
									FFoot_end_R_end: Pose;
									Head_end: Pose;
									BFoot_end_L_end: Pose;
									Tail_07: Pose;
									RootNode: Pose;
								};
							};
						};
					};
					terror_bird: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						["Terror_Bird_5.001"]: MeshPart & {
							RootPart: Bone & {
								Body: Bone & {
									Neck_01: Bone & {
										Neck_02: Bone & {
											Head: Bone;
										};
									};
									wing_R: Bone;
									tail_01: Bone;
									Foot_L: Bone;
									Foot_R: Bone;
									wing_L: Bone;
								};
							};
						};
						InitialPoses: Folder & {
							Head_Original: CFrameValue;
							Terror_Bird_5_Initial: CFrameValue;
							tail_01_Composited: CFrameValue;
							Neck_02_Original: CFrameValue;
							Foot_end_L_Composited: CFrameValue;
							wing_end_R_end_Original: CFrameValue;
							wing_end_R_Composited: CFrameValue;
							tail_01_end_Composited: CFrameValue;
							tail_01_end_end_Original: CFrameValue;
							Foot_end_L_end_Initial: CFrameValue;
							Foot_end_R_Composited: CFrameValue;
							wing_R_Original: CFrameValue;
							Foot_end_R_end_Original: CFrameValue;
							tail_01_Original: CFrameValue;
							Foot_R_Initial: CFrameValue;
							Foot_end_R_end_Composited: CFrameValue;
							Head_Composited: CFrameValue;
							Body_Initial: CFrameValue;
							["Terror_Bird_5.001_Initial"]: CFrameValue;
							Head_end_Initial: CFrameValue;
							Foot_end_R_Original: CFrameValue;
							Foot_L_Original: CFrameValue;
							wing_end_R_end_Composited: CFrameValue;
							Body_Original: CFrameValue;
							["Terror_Bird_5.001_Original"]: CFrameValue;
							Terror_Bird_5_Original: CFrameValue;
							wing_R_Initial: CFrameValue;
							Foot_end_R_end_Initial: CFrameValue;
							Head_end_Composited: CFrameValue;
							Body_Composited: CFrameValue;
							Foot_R_Composited: CFrameValue;
							wing_end_L_end_Composited: CFrameValue;
							wing_L_Original: CFrameValue;
							Foot_end_L_Initial: CFrameValue;
							Foot_R_Original: CFrameValue;
							wing_end_L_Composited: CFrameValue;
							Neck_01_Original: CFrameValue;
							wing_L_Composited: CFrameValue;
							tail_01_end_end_Composited: CFrameValue;
							["Terror_Bird_5.001_Composited"]: CFrameValue;
							Neck_02_Composited: CFrameValue;
							tail_01_end_end_Initial: CFrameValue;
							Foot_end_L_end_Original: CFrameValue;
							Foot_end_L_end_Composited: CFrameValue;
							wing_end_R_Original: CFrameValue;
							Foot_L_Initial: CFrameValue;
							RootPart_Initial: CFrameValue;
							wing_end_R_end_Initial: CFrameValue;
							wing_R_Composited: CFrameValue;
							RootPart_Original: CFrameValue;
							Foot_end_L_Original: CFrameValue;
							Neck_01_Initial: CFrameValue;
							Foot_end_R_Initial: CFrameValue;
							wing_end_L_end_Original: CFrameValue;
							Foot_L_Composited: CFrameValue;
							wing_end_L_end_Initial: CFrameValue;
							wing_end_R_Initial: CFrameValue;
							tail_01_Initial: CFrameValue;
							RootPart_Composited: CFrameValue;
							wing_L_Initial: CFrameValue;
							Head_end_Original: CFrameValue;
							tail_01_end_Initial: CFrameValue;
							wing_end_L_Initial: CFrameValue;
							Neck_02_Initial: CFrameValue;
							wing_end_L_Original: CFrameValue;
							Head_Initial: CFrameValue;
							tail_01_end_Original: CFrameValue;
							Terror_Bird_5_Composited: CFrameValue;
							Neck_01_Composited: CFrameValue;
						};
						AnimSaves: ObjectValue & {
							RUN: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									tail_01_end: Pose;
									wing_end_R: Pose;
									Terror_Bird_5: Pose;
									Foot_end_R_end: Pose;
									Foot_end_R: Pose;
									wing_end_L_end: Pose;
									wing_end_L: Pose;
									Foot_end_L_end: Pose;
									Foot_end_L: Pose;
									wing_end_R_end: Pose;
									tail_01_end_end: Pose;
									["Terror_Bird_5.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												Neck_01: Pose & {
													Neck_02: Pose & {
														Head: Pose;
													};
												};
												wing_R: Pose;
												tail_01: Pose;
												Foot_L: Pose;
												Foot_R: Pose;
												wing_L: Pose;
											};
										};
									};
									RootNode: Pose;
								};
							};
							idle: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									tail_01_end: Pose;
									wing_end_R: Pose;
									Terror_Bird_5: Pose;
									Foot_end_R_end: Pose;
									Foot_end_R: Pose;
									wing_end_L_end: Pose;
									wing_end_L: Pose;
									Foot_end_L_end: Pose;
									Foot_end_L: Pose;
									wing_end_R_end: Pose;
									tail_01_end_end: Pose;
									["Terror_Bird_5.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												Neck_01: Pose & {
													Neck_02: Pose & {
														Head: Pose;
													};
												};
												wing_R: Pose;
												tail_01: Pose;
												Foot_L: Pose;
												Foot_R: Pose;
												wing_L: Pose;
											};
										};
									};
									RootNode: Pose;
								};
							};
							digging: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									tail_01_end: Pose;
									wing_end_R: Pose;
									Terror_Bird_5: Pose;
									Foot_end_R_end: Pose;
									Foot_end_R: Pose;
									wing_end_L_end: Pose;
									wing_end_L: Pose;
									Foot_end_L_end: Pose;
									Foot_end_L: Pose;
									wing_end_R_end: Pose;
									tail_01_end_end: Pose;
									["Terror_Bird_5.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												Neck_01: Pose & {
													Neck_02: Pose & {
														Head: Pose;
													};
												};
												wing_R: Pose;
												tail_01: Pose;
												Foot_L: Pose;
												Foot_R: Pose;
												wing_L: Pose;
											};
										};
									};
									RootNode: Pose;
								};
							};
						};
					};
					stripped_owl: Model & {
						AnimationController: AnimationController & {
							Animator: Animator;
						};
						["ra_15.001"]: MeshPart & {
							RootPart: Bone & {
								Body: Bone & {
									Foot_L: Bone;
									Hand_R: Bone;
									Head: Bone;
									Hand_L: Bone;
									Foot_R: Bone;
								};
							};
						};
						InitialPoses: Folder & {
							Head_Original: CFrameValue;
							Hand_end_R_end_Original: CFrameValue;
							Body_Original: CFrameValue;
							Hand_end_R_end_Initial: CFrameValue;
							Foot_end_L_end_Original: CFrameValue;
							Foot_end_R_end_Initial: CFrameValue;
							Head_end_Composited: CFrameValue;
							Body_Composited: CFrameValue;
							Foot_R_Composited: CFrameValue;
							["ra_15.001_Initial"]: CFrameValue;
							Hand_end_L_Initial: CFrameValue;
							RootPart_Initial: CFrameValue;
							Hand_R_Original: CFrameValue;
							Foot_end_L_end_Initial: CFrameValue;
							Foot_end_L_Initial: CFrameValue;
							Foot_end_L_end_Composited: CFrameValue;
							Foot_R_Original: CFrameValue;
							Hand_end_L_end_Composited: CFrameValue;
							RootPart_Composited: CFrameValue;
							Hand_end_R_Composited: CFrameValue;
							Hand_end_R_end_Composited: CFrameValue;
							["ra_15.001_Original"]: CFrameValue;
							ra_15_Composited: CFrameValue;
							Foot_end_L_Composited: CFrameValue;
							Foot_end_R_Initial: CFrameValue;
							Foot_end_R_Composited: CFrameValue;
							Hand_L_Initial: CFrameValue;
							ra_15_Initial: CFrameValue;
							Foot_end_R_end_Original: CFrameValue;
							Head_Initial: CFrameValue;
							Foot_L_Initial: CFrameValue;
							Foot_R_Initial: CFrameValue;
							Hand_L_Original: CFrameValue;
							Hand_end_R_Initial: CFrameValue;
							Hand_R_Initial: CFrameValue;
							Hand_end_L_end_Initial: CFrameValue;
							Foot_end_L_Original: CFrameValue;
							Hand_end_L_Original: CFrameValue;
							Foot_L_Original: CFrameValue;
							Foot_end_R_end_Composited: CFrameValue;
							Foot_L_Composited: CFrameValue;
							Hand_end_L_end_Original: CFrameValue;
							Head_Composited: CFrameValue;
							Body_Initial: CFrameValue;
							Hand_L_Composited: CFrameValue;
							Head_end_Original: CFrameValue;
							ra_15_Original: CFrameValue;
							["ra_15.001_Composited"]: CFrameValue;
							RootPart_Original: CFrameValue;
							Head_end_Initial: CFrameValue;
							Foot_end_R_Original: CFrameValue;
							Hand_end_L_Composited: CFrameValue;
							Hand_R_Composited: CFrameValue;
							Hand_end_R_Original: CFrameValue;
						};
						AnimSaves: ObjectValue & {
							diging: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									Hand_end_R_end: Pose;
									["ra_15.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												Foot_L: Pose;
												Hand_R: Pose;
												Head: Pose;
												Hand_L: Pose;
												Foot_R: Pose;
											};
										};
									};
									Foot_end_R: Pose;
									Foot_end_R_end: Pose;
									Hand_end_R: Pose;
									Foot_end_L_end: Pose;
									Foot_end_L: Pose;
									Hand_end_L_end: Pose;
									Hand_end_L: Pose;
									ra_15: Pose;
									RootNode: Pose;
								};
							};
							idle: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									Hand_end_R_end: Pose;
									["ra_15.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												Foot_L: Pose;
												Hand_R: Pose;
												Head: Pose;
												Hand_L: Pose;
												Foot_R: Pose;
											};
										};
									};
									Foot_end_R: Pose;
									Foot_end_R_end: Pose;
									Hand_end_R: Pose;
									Foot_end_L_end: Pose;
									Foot_end_L: Pose;
									Hand_end_L_end: Pose;
									Hand_end_L: Pose;
									ra_15: Pose;
									RootNode: Pose;
								};
							};
							run: KeyframeSequence & {
								End: Keyframe & {
									Head_end: Pose;
									Hand_end_R_end: Pose;
									["ra_15.001"]: Pose & {
										RootPart: Pose & {
											Body: Pose & {
												Foot_L: Pose;
												Hand_R: Pose;
												Head: Pose;
												Hand_L: Pose;
												Foot_R: Pose;
											};
										};
									};
									Foot_end_R: Pose;
									Foot_end_R_end: Pose;
									Hand_end_R: Pose;
									Foot_end_L_end: Pose;
									Foot_end_L: Pose;
									Hand_end_L_end: Pose;
									Hand_end_L: Pose;
									ra_15: Pose;
									RootNode: Pose;
								};
							};
						};
					};
				};
			};
			Gift: Part & {
				Mesh: SpecialMesh;
			};
			shemlint2: Model & {
				LeftLowerArm: MeshPart & {
					LeftLowerArm: WrapTarget;
					OriginalSize: Vector3Value;
					LeftElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftElbow: Motor6D;
					AvatarPartScaleType: StringValue;
					LeftWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				LeftFoot: MeshPart & {
					OriginalSize: Vector3Value;
					LeftAnkle: Motor6D;
					LeftFoot: WrapTarget;
					AvatarPartScaleType: StringValue;
					LeftAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftFootAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				AnimSaves: ObjectValue;
				RightHand: MeshPart & {
					RightGripAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightWrist: Motor6D;
					RightWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightHand: WrapTarget;
					OriginalSize: Vector3Value;
					AvatarPartScaleType: StringValue;
				};
				HumanoidRootPart: Part & {
					RootRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					RootAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				Shirt: Shirt;
				Pants: Pants;
				RightLowerLeg: MeshPart & {
					RightAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					RightKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightLowerLeg: WrapTarget;
					RightKnee: Motor6D;
					AvatarPartScaleType: StringValue;
				};
				LeftUpperLeg: MeshPart & {
					LeftHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftHip: Motor6D;
					OriginalSize: Vector3Value;
					AvatarPartScaleType: StringValue;
					LeftUpperLeg: WrapTarget;
					LeftKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				LeftLowerLeg: MeshPart & {
					LeftKnee: Motor6D;
					OriginalSize: Vector3Value;
					LeftLowerLeg: WrapTarget;
					AvatarPartScaleType: StringValue;
					LeftAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				LowerTorso: MeshPart & {
					WaistCenterAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					Root: Motor6D;
					LowerTorso: WrapTarget;
					OriginalSize: Vector3Value;
					RootRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					AvatarPartScaleType: StringValue;
					WaistRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					WaistBackAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					WaistFrontAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				Head: MeshPart & {
					HatAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					NeckRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					FaceFrontAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					face: Decal;
					Neck: Motor6D;
					HairAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					Head: WrapTarget;
					FaceCenterAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					AvatarPartScaleType: StringValue;
				};
				UpperTorso: MeshPart & {
					RightCollarAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					BodyBackAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					NeckRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftCollarAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					Waist: Motor6D;
					UpperTorso: WrapTarget;
					OriginalSize: Vector3Value;
					AvatarPartScaleType: StringValue;
					RightShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					BodyFrontAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					WaistRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					NeckAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				Animate: LocalScript & {
					point: StringValue & {
						PointAnim: Animation;
					};
					climb: StringValue & {
						ClimbAnim: Animation;
					};
					cheer: StringValue & {
						CheerAnim: Animation;
					};
					dance3: StringValue & {
						Animation2: Animation & {
							Weight: NumberValue;
						};
						Animation3: Animation & {
							Weight: NumberValue;
						};
						Animation1: Animation & {
							Weight: NumberValue;
						};
					};
					toolnone: StringValue & {
						ToolNoneAnim: Animation;
					};
					dance: StringValue & {
						Animation2: Animation & {
							Weight: NumberValue;
						};
						Animation3: Animation & {
							Weight: NumberValue;
						};
						Animation1: Animation & {
							Weight: NumberValue;
						};
					};
					ScaleDampeningPercent: NumberValue;
					fall: StringValue & {
						FallAnim: Animation;
					};
					laugh: StringValue & {
						LaughAnim: Animation;
					};
					idle: StringValue & {
						Animation2: Animation & {
							Weight: NumberValue;
						};
						Animation1: Animation & {
							Weight: NumberValue;
						};
					};
					jump: StringValue & {
						JumpAnim: Animation;
					};
					sit: StringValue & {
						SitAnim: Animation;
					};
					run: StringValue & {
						RunAnim: Animation;
					};
					swim: StringValue & {
						Swim: Animation;
					};
					mood: StringValue & {
						Animation1: Animation;
					};
					wave: StringValue & {
						WaveAnim: Animation;
					};
					PlayEmote: BindableFunction;
					toollunge: StringValue & {
						ToolLungeAnim: Animation;
					};
					toolslash: StringValue & {
						ToolSlashAnim: Animation;
					};
					swimidle: StringValue & {
						SwimIdle: Animation;
					};
					dance2: StringValue & {
						Animation2: Animation & {
							Weight: NumberValue;
						};
						Animation3: Animation & {
							Weight: NumberValue;
						};
						Animation1: Animation & {
							Weight: NumberValue;
						};
					};
					walk: StringValue & {
						WalkAnim: Animation;
					};
				};
				["Pal Hair"]: Accessory & {
					Handle: MeshPart & {
						HairAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
					};
				};
				LeftUpperArm: MeshPart & {
					LeftShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					LeftShoulderAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftShoulder: Motor6D;
					LeftUpperArm: WrapTarget;
					AvatarPartScaleType: StringValue;
				};
				RightLowerArm: MeshPart & {
					RightLowerArm: WrapTarget;
					OriginalSize: Vector3Value;
					RightElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightElbow: Motor6D;
					AvatarPartScaleType: StringValue;
				};
				LeftHand: MeshPart & {
					OriginalSize: Vector3Value;
					LeftHand: WrapTarget;
					LeftWrist: Motor6D;
					LeftGripAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					AvatarPartScaleType: StringValue;
					LeftWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				RightFoot: MeshPart & {
					RightAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					RightAnkle: Motor6D;
					RightFootAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightFoot: WrapTarget;
					AvatarPartScaleType: StringValue;
				};
				Humanoid: Humanoid & {
					BodyDepthScale: NumberValue;
					BodyHeightScale: NumberValue;
					BodyTypeScale: NumberValue;
					Status: Status;
					BodyProportionScale: NumberValue;
					Animator: Animator;
					BodyWidthScale: NumberValue;
					HumanoidDescription: HumanoidDescription & {
						AccessoryDescription: AccessoryDescription;
					};
					HeadScale: NumberValue;
				};
				["Body Colors"]: BodyColors;
				RightUpperLeg: MeshPart & {
					OriginalSize: Vector3Value;
					RightHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightHip: Motor6D;
					RightUpperLeg: WrapTarget;
					AvatarPartScaleType: StringValue;
				};
				RightUpperArm: MeshPart & {
					RightShoulder: Motor6D;
					OriginalSize: Vector3Value;
					RightElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightUpperArm: WrapTarget;
					RightShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightShoulderAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					AvatarPartScaleType: StringValue;
				};
			};
			trans_arrow: MeshPart;
			pets: Folder & {
				["03_dodo"]: Model & {
					Body: MeshPart & {
						["Foot.R"]: Bone;
						RootPart: Bone & {
							Body: Bone & {
								["wing.R"]: Bone;
								tail: Bone;
								["wing.L"]: Bone;
								Head: Bone & {
									feather: Bone;
								};
							};
						};
						["Foot.L"]: Bone;
					};
				};
				["5_terror_bird"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Terror_Bird_5_Initial: CFrameValue;
						Body_Original: CFrameValue;
						tail_01_Composited: CFrameValue;
						Neck_01_Initial: CFrameValue;
						RootPart_Original: CFrameValue;
						Foot_end_R_Initial: CFrameValue;
						wing_end_R_Composited: CFrameValue;
						Body_Composited: CFrameValue;
						Foot_R_Composited: CFrameValue;
						wing_L_Original: CFrameValue;
						Foot_end_L_Initial: CFrameValue;
						Foot_R_Original: CFrameValue;
						wing_end_L_Composited: CFrameValue;
						RootPart_Composited: CFrameValue;
						wing_L_Composited: CFrameValue;
						tail_01_end_Initial: CFrameValue;
						Foot_end_L_Composited: CFrameValue;
						tail_01_Initial: CFrameValue;
						Neck_02_Composited: CFrameValue;
						wing_R_Original: CFrameValue;
						Foot_L_Original: CFrameValue;
						Foot_L_Composited: CFrameValue;
						tail_01_Original: CFrameValue;
						Foot_L_Initial: CFrameValue;
						Foot_R_Initial: CFrameValue;
						Neck_02_Original: CFrameValue;
						wing_R_Composited: CFrameValue;
						wing_L_Initial: CFrameValue;
						wing_end_R_Initial: CFrameValue;
						wing_end_R_Original: CFrameValue;
						wing_R_Initial: CFrameValue;
						Foot_end_R_Composited: CFrameValue;
						Foot_end_L_Original: CFrameValue;
						tail_01_end_Original: CFrameValue;
						Head_Initial: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Terror_Bird_5_Original: CFrameValue;
						Terror_Bird_5_Composited: CFrameValue;
						tail_01_end_Composited: CFrameValue;
						wing_end_L_Initial: CFrameValue;
						Neck_02_Initial: CFrameValue;
						wing_end_L_Original: CFrameValue;
						Foot_end_R_Original: CFrameValue;
						Neck_01_Original: CFrameValue;
						RootPart_Initial: CFrameValue;
						Neck_01_Composited: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								Neck_01: Bone & {
									Neck_02: Bone & {
										Head: Bone;
									};
								};
								wing_R: Bone;
								tail_01: Bone;
								Foot_L: Bone;
								Foot_R: Bone;
								wing_L: Bone;
							};
						};
					};
				};
				["2_coelodonta"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						["FFoot.R_end_Original"]: CFrameValue;
						Coelodonta_2_Composited: CFrameValue;
						Body_Original: CFrameValue;
						["BFoot.R_end_Composited"]: CFrameValue;
						["BFoot.R_end_Initial"]: CFrameValue;
						["FFoot.R_end_Composited"]: CFrameValue;
						RootPart_Original: CFrameValue;
						["FFoot.R_end_Initial"]: CFrameValue;
						Tail1_Composited: CFrameValue;
						Body_Composited: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						FFoot_L_Original: CFrameValue;
						Tail1_Initial: CFrameValue;
						Coelodonta_2_Initial: CFrameValue;
						RootPart_Composited: CFrameValue;
						["BFoot.R_end_Original"]: CFrameValue;
						Tail2_Original: CFrameValue;
						FFoot_R_Original: CFrameValue;
						BFoot_R_Original: CFrameValue;
						Tail2_Composited: CFrameValue;
						Head_Initial: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						BFoot_L_Original: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Coelodonta_2_Original: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						Tail2_Initial: CFrameValue;
						Tail1_Original: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Head: Bone;
								FFoot_R: Bone;
								FFoot_L: Bone;
								Tail1: Bone & {
									Tail2: Bone;
								};
							};
						};
					};
				};
				["07_bracho"]: Model & {
					Body: MeshPart;
				};
				["7_guardian_dog"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Chain_01_Original: CFrameValue;
						Chain_02_Initial: CFrameValue;
						BFoot_end_R_Composited: CFrameValue;
						Body_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						FFoot_end_R_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						Guardian_Dog_7_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						Chain_02_Original: CFrameValue;
						Guardian_Dog_7_Initial: CFrameValue;
						RootPart_Composited: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						Chain_01_Initial: CFrameValue;
						FFoot_end_L_Original: CFrameValue;
						FFoot_R_Original: CFrameValue;
						BFoot_end_R_Original: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						Chain_02_Composited: CFrameValue;
						BFoot_R_Original: CFrameValue;
						FFoot_L_Original: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						Tail_02_Original: CFrameValue;
						Tail_01_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						FFoot_end_R_Original: CFrameValue;
						BFoot_end_L_Original: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						BFoot_L_Original: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						Chain_01_Composited: CFrameValue;
						Head_Original: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						Guardian_Dog_7_Composited: CFrameValue;
						FFoot_end_L_Composited: CFrameValue;
						FFoot_end_R_Initial: CFrameValue;
						Head_Initial: CFrameValue;
						FFoot_end_L_Initial: CFrameValue;
						BFoot_end_L_Composited: CFrameValue;
						BFoot_end_R_Initial: CFrameValue;
						Body_Composited: CFrameValue;
						BFoot_end_L_Initial: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Head: Bone;
								Chain_01: Bone & {
									Chain_02: Bone;
								};
								FFoot_R: Bone;
								FFoot_L: Bone;
								Tail_01: Bone & {
									Tail_02: Bone;
								};
							};
						};
					};
				};
				["13_bearded_dragon"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Tail_11_Composited: CFrameValue;
						Bearded_Dragon_13_Composited: CFrameValue;
						Tail_01_Original: CFrameValue;
						Bearded_Dragon_13_Initial: CFrameValue;
						RootPart_Original: CFrameValue;
						BFoot_end_R_Original: CFrameValue;
						BFoot_end_L_Original: CFrameValue;
						Tail_04_Original: CFrameValue;
						FFoot_end_R_Original: CFrameValue;
						FFoot_end_L_Original: CFrameValue;
						Tail_03_Initial: CFrameValue;
						Tail_09_Composited: CFrameValue;
						Tail_05_Initial: CFrameValue;
						Tail_10_Composited: CFrameValue;
						Tail_06_Original: CFrameValue;
						BFoot_R_Original: CFrameValue;
						Tail_07_Initial: CFrameValue;
						Tail_02_Original: CFrameValue;
						Tail_05_Original: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						Tail_09_Original: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_05_Composited: CFrameValue;
						Tail_08_Composited: CFrameValue;
						Tail_10_Original: CFrameValue;
						Tail_08_Original: CFrameValue;
						BFoot_end_R_Composited: CFrameValue;
						Body_Original: CFrameValue;
						FFoot_end_R_Composited: CFrameValue;
						Tail_08_Initial: CFrameValue;
						Tail_11_Original: CFrameValue;
						joint10_Initial: CFrameValue;
						Tail_10_Initial: CFrameValue;
						RootPart_Composited: CFrameValue;
						FFoot_R_Original: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						Tail_11_Initial: CFrameValue;
						Tail_04_Initial: CFrameValue;
						FFoot_L_Original: CFrameValue;
						Bearded_Dragon_13_Original: CFrameValue;
						joint10_Composited: CFrameValue;
						Tail_06_Initial: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						joint10_Original: CFrameValue;
						Tail_07_Composited: CFrameValue;
						Tail_06_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						Tail_01_Composited: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						Tail_03_Original: CFrameValue;
						Tail_07_Original: CFrameValue;
						BFoot_L_Original: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						Head_Initial: CFrameValue;
						Tail_03_Composited: CFrameValue;
						Body_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						Tail_01_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						FFoot_end_L_Composited: CFrameValue;
						FFoot_end_R_Initial: CFrameValue;
						Tail_04_Composited: CFrameValue;
						FFoot_end_L_Initial: CFrameValue;
						BFoot_end_L_Composited: CFrameValue;
						BFoot_end_R_Initial: CFrameValue;
						Tail_09_Initial: CFrameValue;
						BFoot_end_L_Initial: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Head: Bone;
								FFoot_R: Bone;
								FFoot_L: Bone;
								Tail_01: Bone & {
									Tail_02: Bone & {
										Tail_03: Bone & {
											Tail_04: Bone & {
												Tail_05: Bone & {
													Tail_06: Bone & {
														Tail_07: Bone & {
															Tail_08: Bone & {
																Tail_09: Bone & {
																	Tail_10: Bone & {
																		Tail_11: Bone;
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
				["Velociraptor-34"]: Model & {
					["default"]: MeshPart;
				};
				["16_sphinx"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Sphinx_16_Original: CFrameValue;
						BFoot_end_R_Composited: CFrameValue;
						Body_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						FFoot_end_R_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						FFoot_L_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						FFoot_end_L_Original: CFrameValue;
						Tail_03_Initial: CFrameValue;
						Sphinx_16_Composited: CFrameValue;
						RootPart_Composited: CFrameValue;
						FFoot_R_Original: CFrameValue;
						BFoot_end_L_Initial: CFrameValue;
						BFoot_end_L_Original: CFrameValue;
						BFoot_R_Original: CFrameValue;
						Tail_03_Original: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						Tail_02_Original: CFrameValue;
						Tail_01_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						BFoot_L_Original: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						Tail_03_Composited: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						FFoot_end_R_Original: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						BFoot_end_R_Original: CFrameValue;
						FFoot_end_L_Composited: CFrameValue;
						FFoot_end_R_Initial: CFrameValue;
						Head_Initial: CFrameValue;
						FFoot_end_L_Initial: CFrameValue;
						BFoot_end_L_Composited: CFrameValue;
						BFoot_end_R_Initial: CFrameValue;
						Body_Composited: CFrameValue;
						Sphinx_16_Initial: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Head: Bone;
								FFoot_R: Bone;
								FFoot_L: Bone;
								Tail_01: Bone & {
									Tail_02: Bone & {
										Tail_03: Bone;
									};
								};
							};
						};
					};
				};
				["8_imagotaria"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Hand_L_Original: CFrameValue;
						Body_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Hand_End_R_Composited: CFrameValue;
						Body_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						Hand_02_L_Original: CFrameValue;
						Tail_04_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						Hand_R_Original: CFrameValue;
						Tail_03_Initial: CFrameValue;
						Hand_02_R_Original: CFrameValue;
						Hand_End_R_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						Hand_End_L_Initial: CFrameValue;
						Hand_End_L_Original: CFrameValue;
						Tail_04_Composited: CFrameValue;
						Tail_04_Initial: CFrameValue;
						Hand_End_L_Composited: CFrameValue;
						Hand_02_L_Composited: CFrameValue;
						Hand_02_R_Initial: CFrameValue;
						Hand_02_L_Initial: CFrameValue;
						Imagotaria_8_Original: CFrameValue;
						Tail_end_R_Composited: CFrameValue;
						Tail_02_Original: CFrameValue;
						Tail_05_Original: CFrameValue;
						RootPart_Initial: CFrameValue;
						Hand_L_Initial: CFrameValue;
						Tail_end_R_Original: CFrameValue;
						Tail_03_Original: CFrameValue;
						Hand_L_Composited: CFrameValue;
						Hand_End_R_Initial: CFrameValue;
						Hand_02_R_Composited: CFrameValue;
						Hand_R_Initial: CFrameValue;
						Tail_03_Composited: CFrameValue;
						Head_Initial: CFrameValue;
						Tail_end_L_Initial: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						Hand_R_Composited: CFrameValue;
						Imagotaria_8_Composited: CFrameValue;
						Tail_end_L_Original: CFrameValue;
						Tail_end_R_Initial: CFrameValue;
						Tail_end_L_Composited: CFrameValue;
						Imagotaria_8_Initial: CFrameValue;
						Tail_01_Composited: CFrameValue;
						Tail_05_Initial: CFrameValue;
						Tail_05_Composited: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								Hand_L: Bone & {
									Hand_02_L: Bone;
								};
								Tail_01: Bone & {
									Tail_02: Bone & {
										Tail_03: Bone & {
											Tail_04: Bone & {
												Tail_05: Bone;
											};
										};
									};
								};
								Hand_R: Bone & {
									Hand_02_R: Bone;
								};
								Head: Bone;
							};
						};
					};
				};
				["14_horned_cobra"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Body_06_Composited: CFrameValue;
						Neck_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						Body_02_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Body_03_Composited: CFrameValue;
						Horned_Cobra_14_Initial: CFrameValue;
						Tail_02_Composited: CFrameValue;
						Body_05_Initial: CFrameValue;
						Tail_04_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						Body_06_Original: CFrameValue;
						Body_01_Initial: CFrameValue;
						Horned_Cobra_14_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						Neck_Initial: CFrameValue;
						Tail_04_Composited: CFrameValue;
						Tail_04_Initial: CFrameValue;
						Body_04_Initial: CFrameValue;
						Body_02_Composited: CFrameValue;
						Body_04_Original: CFrameValue;
						Head_Initial: CFrameValue;
						Tail_01_Composited: CFrameValue;
						Body_05_Composited: CFrameValue;
						Body_03_Original: CFrameValue;
						Body_05_Original: CFrameValue;
						Tail_03_Original: CFrameValue;
						Body_07_Initial: CFrameValue;
						Tail_03_Initial: CFrameValue;
						Body_02_Initial: CFrameValue;
						Tail_03_Composited: CFrameValue;
						Tail_02_Initial: CFrameValue;
						Tail_02_Original: CFrameValue;
						Head_Composited: CFrameValue;
						Head_Original: CFrameValue;
						Body_07_Original: CFrameValue;
						Body_04_Composited: CFrameValue;
						Body_01_Original: CFrameValue;
						Body_07_Composited: CFrameValue;
						Neck_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						Body_06_Initial: CFrameValue;
						Body_03_Initial: CFrameValue;
						Body_01_Composited: CFrameValue;
						Horned_Cobra_14_Composited: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Head: Bone & {
								Neck: Bone & {
									Body_01: Bone & {
										Body_02: Bone & {
											Body_03: Bone & {
												Body_04: Bone & {
													Body_05: Bone & {
														Body_06: Bone & {
															Body_07: Bone & {
																Tail_01: Bone & {
																	Tail_02: Bone & {
																		Tail_03: Bone & {
																			Tail_04: Bone;
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
				["01_sabertooth"]: Model & {
					Body: MeshPart & {
						["BLeg.L"]: Bone;
						["FLeg.R"]: Bone;
						["FLeg.L"]: Bone;
						tail: Bone & {
							["tail.001"]: Bone & {
								["tail.002"]: Bone & {
									["tail.003"]: Bone & {
										["tail.004"]: Bone;
									};
								};
							};
						};
						["BLeg.R"]: Bone;
						body: Bone & {
							head: Bone;
						};
					};
				};
				["9_guardian_crocodile"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Body_Original: CFrameValue;
						tail_02_Original: CFrameValue;
						tail_01_Composited: CFrameValue;
						wing_R_Initial: CFrameValue;
						RootPart_Original: CFrameValue;
						Foot_end_R_Initial: CFrameValue;
						wing_end_R_Composited: CFrameValue;
						Body_Composited: CFrameValue;
						Foot_R_Composited: CFrameValue;
						wing_L_Original: CFrameValue;
						tail_02_Initial: CFrameValue;
						Foot_end_L_Initial: CFrameValue;
						Foot_R_Original: CFrameValue;
						wing_end_L_Composited: CFrameValue;
						RootPart_Composited: CFrameValue;
						Guardian_Crocodile_9_Initial: CFrameValue;
						Foot_end_R_Composited: CFrameValue;
						wing_R_Original: CFrameValue;
						tail_end_Initial: CFrameValue;
						tail_01_Original: CFrameValue;
						Foot_L_Initial: CFrameValue;
						Foot_R_Initial: CFrameValue;
						Guardian_Crocodile_9_Original: CFrameValue;
						wing_R_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						wing_L_Initial: CFrameValue;
						wing_L_Composited: CFrameValue;
						Foot_end_L_Composited: CFrameValue;
						tail_02_Composited: CFrameValue;
						Foot_end_L_Original: CFrameValue;
						Foot_L_Original: CFrameValue;
						Foot_L_Composited: CFrameValue;
						tail_01_Initial: CFrameValue;
						Body_Initial: CFrameValue;
						tail_end_Composited: CFrameValue;
						wing_end_R_Initial: CFrameValue;
						wing_end_R_Original: CFrameValue;
						wing_end_L_Initial: CFrameValue;
						Head_Initial: CFrameValue;
						wing_end_L_Original: CFrameValue;
						Foot_end_R_Original: CFrameValue;
						tail_end_Original: CFrameValue;
						Head_Composited: CFrameValue;
						Guardian_Crocodile_9_Composited: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								Foot_L: Bone & {
									Foot_end_L: Bone;
								};
								wing_R: Bone;
								Head: Bone;
								wing_L: Bone;
								Foot_R: Bone & {
									Foot_end_R: Bone;
								};
								tail_01: Bone & {
									tail_02: Bone & {
										tail_end: Bone;
									};
								};
							};
						};
					};
				};
				["3_glyptodon"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						["FFoot.R_end_Original"]: CFrameValue;
						Body_Original: CFrameValue;
						Glyptodon_3_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						["BFoot.R_end_Initial"]: CFrameValue;
						["FFoot.R_end_Composited"]: CFrameValue;
						RootPart_Original: CFrameValue;
						["FFoot.R_end_Initial"]: CFrameValue;
						Body_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						FFoot_L_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						Tail_03_Initial: CFrameValue;
						Glyptodon_3_Initial: CFrameValue;
						RootPart_Composited: CFrameValue;
						["BFoot.R_end_Original"]: CFrameValue;
						FFoot_R_Original: CFrameValue;
						BFoot_R_Original: CFrameValue;
						Tail_02_Original: CFrameValue;
						Tail_01_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						BFoot_L_Original: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						Tail_03_Composited: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						Head_Composited: CFrameValue;
						["BFoot.R_end_Composited"]: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						Glyptodon_3_Composited: CFrameValue;
						Tail_03_Original: CFrameValue;
						Head_Initial: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Tail_01: Bone & {
									Tail_02: Bone & {
										Tail_03: Bone;
									};
								};
								FFoot_R: Bone;
								FFoot_L: Bone;
								Head: Bone;
							};
						};
					};
				};
				["15_stripped_owl"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Hand_L_Original: CFrameValue;
						Body_Original: CFrameValue;
						Foot_end_L_Composited: CFrameValue;
						Foot_end_R_Initial: CFrameValue;
						Body_Composited: CFrameValue;
						Foot_R_Composited: CFrameValue;
						Hand_R_Original: CFrameValue;
						Foot_end_L_Initial: CFrameValue;
						Foot_R_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						Hand_end_R_Composited: CFrameValue;
						ra_15_Composited: CFrameValue;
						Foot_L_Composited: CFrameValue;
						ra_15_Initial: CFrameValue;
						Head_Initial: CFrameValue;
						Foot_L_Initial: CFrameValue;
						Foot_R_Initial: CFrameValue;
						Hand_R_Initial: CFrameValue;
						Hand_end_L_Original: CFrameValue;
						Hand_end_L_Initial: CFrameValue;
						Foot_end_L_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Hand_L_Initial: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Hand_L_Composited: CFrameValue;
						Hand_R_Composited: CFrameValue;
						ra_15_Original: CFrameValue;
						Foot_end_R_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						Foot_L_Original: CFrameValue;
						Foot_end_R_Original: CFrameValue;
						Hand_end_L_Composited: CFrameValue;
						Hand_end_R_Initial: CFrameValue;
						Hand_end_R_Original: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								Foot_L: Bone;
								Hand_R: Bone;
								Head: Bone;
								Hand_L: Bone;
								Foot_R: Bone;
							};
						};
					};
				};
				["6_behemotops"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						BFoot_end_R_Composited: CFrameValue;
						Body_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						Behemotops_6_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Body_Composited: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						BFoot_end_L_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						FFoot_end_L_Original: CFrameValue;
						Behemotops_6_Composited: CFrameValue;
						RootPart_Composited: CFrameValue;
						Behemotops_6_Initial: CFrameValue;
						FFoot_R_Original: CFrameValue;
						BFoot_R_Original: CFrameValue;
						FFoot_end_R_Composited: CFrameValue;
						Tail_02_Original: CFrameValue;
						Tail_01_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						FFoot_end_R_Original: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						BFoot_L_Original: CFrameValue;
						FFoot_L_Original: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						Head_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						FFoot_end_L_Composited: CFrameValue;
						FFoot_end_R_Initial: CFrameValue;
						Head_Initial: CFrameValue;
						FFoot_end_L_Initial: CFrameValue;
						BFoot_end_L_Composited: CFrameValue;
						BFoot_end_R_Initial: CFrameValue;
						BFoot_end_R_Original: CFrameValue;
						BFoot_end_L_Initial: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Head: Bone;
								FFoot_R: Bone;
								FFoot_L: Bone;
								Tail_01: Bone & {
									Tail_02: Bone;
								};
							};
						};
					};
				};
				["10_giant_crab"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Claws_Lower_R_Composited: CFrameValue;
						Eye_L_Initial: CFrameValue;
						Eye_End_R_Initial: CFrameValue;
						Eye_End_L_Composited: CFrameValue;
						RootPart_Original: CFrameValue;
						Foot_02_L_Initial: CFrameValue;
						Foot_01_R_Original: CFrameValue;
						Foot_01_L_Original: CFrameValue;
						Claws_L_Original: CFrameValue;
						Foot_02_R_Composited: CFrameValue;
						Foot_02_L_Composited: CFrameValue;
						Claws_R_Initial: CFrameValue;
						Foot_end_03_R_Composited: CFrameValue;
						Claws_L_Composited: CFrameValue;
						Eye_R_Composited: CFrameValue;
						Giant_Crab_10_Composited: CFrameValue;
						Foot_03_R_Initial: CFrameValue;
						Eye_End_R_Original: CFrameValue;
						Claws_Lower_L_Original: CFrameValue;
						Body_Initial: CFrameValue;
						Foot_01_L_Composited: CFrameValue;
						Foot_end_01_L_Original: CFrameValue;
						Giant_Crab_10_Initial: CFrameValue;
						Foot_end_03_L_Original: CFrameValue;
						Foot_03_L_Initial: CFrameValue;
						Body_Original: CFrameValue;
						Shell_Original: CFrameValue;
						Foot_03_L_Original: CFrameValue;
						Foot_end_02_R_Initial: CFrameValue;
						Claws_L_Initial: CFrameValue;
						Claws_Lower_R_Original: CFrameValue;
						Claws_Lower_L_Composited: CFrameValue;
						Foot_end_02_L_Original: CFrameValue;
						Eye_L_Composited: CFrameValue;
						Eye_R_Initial: CFrameValue;
						Foot_02_R_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						Foot_end_03_R_Initial: CFrameValue;
						Claws_Lower_L_Initial: CFrameValue;
						Foot_end_03_L_Initial: CFrameValue;
						Foot_02_L_Original: CFrameValue;
						Foot_end_02_L_Initial: CFrameValue;
						Foot_end_01_R_Initial: CFrameValue;
						Foot_03_R_Original: CFrameValue;
						Giant_Crab_10_Original: CFrameValue;
						Foot_02_R_Initial: CFrameValue;
						Foot_01_R_Initial: CFrameValue;
						Foot_end_02_R_Composited: CFrameValue;
						Claws_R_Original: CFrameValue;
						RootPart_Initial: CFrameValue;
						Foot_end_02_R_Original: CFrameValue;
						Eye_End_R_Composited: CFrameValue;
						Eye_End_L_Original: CFrameValue;
						Shell_Composited: CFrameValue;
						Foot_03_L_Composited: CFrameValue;
						Shell_Initial: CFrameValue;
						Foot_end_02_L_Composited: CFrameValue;
						Body_Composited: CFrameValue;
						Claws_R_Composited: CFrameValue;
						Foot_03_R_Composited: CFrameValue;
						Eye_End_L_Initial: CFrameValue;
						Foot_end_01_L_Initial: CFrameValue;
						Foot_end_03_L_Composited: CFrameValue;
						Foot_01_R_Composited: CFrameValue;
						Foot_end_01_L_Composited: CFrameValue;
						Foot_01_L_Initial: CFrameValue;
						Foot_end_03_R_Original: CFrameValue;
						Foot_end_01_R_Composited: CFrameValue;
						Foot_end_01_R_Original: CFrameValue;
						Eye_R_Original: CFrameValue;
						Claws_Lower_R_Initial: CFrameValue;
						Eye_L_Original: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								Foot_03_R: Bone & {
									Foot_end_03_R: Bone;
								};
								Eye_R: Bone & {
									Eye_End_R: Bone;
								};
								Foot_03_L: Bone & {
									Foot_end_03_L: Bone;
								};
								Foot_02_R: Bone & {
									Foot_end_02_R: Bone;
								};
								Eye_L: Bone & {
									Eye_End_L: Bone;
								};
								Claws_L: Bone & {
									Claws_Lower_L: Bone;
								};
								Foot_01_L: Bone & {
									Foot_end_01_L: Bone;
								};
								Foot_01_R: Bone & {
									Foot_end_01_R: Bone;
								};
								Foot_02_L: Bone & {
									Foot_end_02_L: Bone;
								};
								Claws_R: Bone & {
									Claws_Lower_R: Bone;
								};
								Shell: Bone;
							};
						};
					};
				};
				["02_triceratops"]: Model & {
					Body: MeshPart & {
						Root: Bone & {
							["BLeg.L"]: Bone;
							["FLeg.R"]: Bone;
							["FLeg.L"]: Bone;
							["BLeg.R"]: Bone;
							Body: Bone & {
								head: Bone;
								["Body.001"]: Bone & {
									["Body.002"]: Bone & {
										["Body.003"]: Bone & {
											["Body.004"]: Bone & {
												["Body.005"]: Bone;
											};
										};
									};
								};
							};
						};
					};
				};
				["1_castoroides"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Castoroides_1_Initial: CFrameValue;
						BFoot_end_R_Composited: CFrameValue;
						Body_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						FFoot_end_R_Composited: CFrameValue;
						BFoot_end_R_Original: CFrameValue;
						BFoot_end_L_Original: CFrameValue;
						FFoot_end_R_Original: CFrameValue;
						FFoot_end_L_Original: CFrameValue;
						Tail_03_Initial: CFrameValue;
						RootPart_Composited: CFrameValue;
						Tail_03_Original: CFrameValue;
						FFoot_R_Original: CFrameValue;
						FFoot_L_Original: CFrameValue;
						Castoroides_1_Original: CFrameValue;
						Tail_01_Composited: CFrameValue;
						BFoot_R_Original: CFrameValue;
						Tail_02_Composited: CFrameValue;
						Tail_01_Initial: CFrameValue;
						Tail_02_Original: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						Body_Composited: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						BFoot_L_Original: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						Heat_Initial: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						Tail_03_Composited: CFrameValue;
						Heat_Original: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						FFoot_end_L_Composited: CFrameValue;
						Castoroides_1_Composited: CFrameValue;
						FFoot_end_R_Initial: CFrameValue;
						FFoot_end_L_Initial: CFrameValue;
						BFoot_end_L_Composited: CFrameValue;
						Heat_Composited: CFrameValue;
						BFoot_end_R_Initial: CFrameValue;
						BFoot_end_L_Initial: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Tail_01: Bone & {
									Tail_02: Bone & {
										Tail_03: Bone;
									};
								};
								FFoot_R: Bone;
								FFoot_L: Bone;
								Heat: Bone;
							};
						};
					};
				};
				["12_leon_desert"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						BFoot_end_R_Composited: CFrameValue;
						Body_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						Leon_Desert_12_Initial: CFrameValue;
						RootPart_Original: CFrameValue;
						FFoot_end_R_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						BFoot_end_L_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						FFoot_end_L_Original: CFrameValue;
						Tail_03_Initial: CFrameValue;
						RootPart_Composited: CFrameValue;
						FFoot_R_Original: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						FFoot_end_L_Composited: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						BFoot_R_Original: CFrameValue;
						FFoot_L_Original: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						Tail_02_Original: CFrameValue;
						Tail_01_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						Body_Composited: CFrameValue;
						Head_Initial: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						BFoot_L_Original: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						Tail_03_Composited: CFrameValue;
						Tail_03_Original: CFrameValue;
						Leon_Desert_12_Original: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						BFoot_end_R_Original: CFrameValue;
						Leon_Desert_12_Composited: CFrameValue;
						FFoot_end_R_Initial: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						FFoot_end_L_Initial: CFrameValue;
						BFoot_end_L_Composited: CFrameValue;
						BFoot_end_R_Initial: CFrameValue;
						FFoot_end_R_Original: CFrameValue;
						BFoot_end_L_Initial: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Head: Bone;
								FFoot_R: Bone;
								FFoot_L: Bone;
								Tail_01: Bone & {
									Tail_02: Bone & {
										Tail_03: Bone;
									};
								};
							};
						};
					};
				};
				["17_anubis"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Neck_Original: CFrameValue;
						Hand_L_Original: CFrameValue;
						Body_Original: CFrameValue;
						Anubis_17_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Foot_end_R_Initial: CFrameValue;
						Body_Composited: CFrameValue;
						Foot_R_Composited: CFrameValue;
						Hand_R_Original: CFrameValue;
						Foot_end_L_Initial: CFrameValue;
						Foot_R_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						Neck_Initial: CFrameValue;
						Foot_end_R_Composited: CFrameValue;
						Hand_L_Initial: CFrameValue;
						Foot_L_Initial: CFrameValue;
						Foot_R_Initial: CFrameValue;
						Hand_end_L_Initial: CFrameValue;
						Hand_R_Initial: CFrameValue;
						Foot_end_L_Composited: CFrameValue;
						Foot_L_Original: CFrameValue;
						Hand_end_L_Original: CFrameValue;
						Foot_L_Composited: CFrameValue;
						Foot_end_L_Original: CFrameValue;
						Hand_end_R_Initial: CFrameValue;
						Head_Initial: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Hand_L_Composited: CFrameValue;
						Hand_R_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						Anubis_17_Composited: CFrameValue;
						Neck_Composited: CFrameValue;
						Anubis_17_Initial: CFrameValue;
						Foot_end_R_Original: CFrameValue;
						Hand_end_L_Composited: CFrameValue;
						Hand_end_R_Composited: CFrameValue;
						Hand_end_R_Original: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								Foot_L: Bone;
								Hand_R: Bone;
								Hand_L: Bone;
								Foot_R: Bone;
								Neck: Bone & {
									Head: Bone;
								};
							};
						};
					};
				};
				["09_stego"]: Model & {
					Body: MeshPart & {
						["FFoot.L"]: Bone;
						["BFoot.R"]: Bone;
						["BFoot.L"]: Bone;
						RootPart: Bone & {
							Body: Bone & {
								Neck: Bone & {
									Neck2: Bone & {
										Heat: Bone;
									};
								};
								Tail: Bone & {
									["Tail.001"]: Bone & {
										["Tail.002"]: Bone & {
											["Tail.004"]: Bone & {
												["Tail.005"]: Bone;
											};
										};
									};
								};
							};
						};
						["FFoot.R"]: Bone;
					};
				};
				["08_trex"]: Model & {
					Body: MeshPart & {
						Root: Bone & {
							Body: Bone & {
								head: Bone;
								Tail: Bone & {
									["Tail.001"]: Bone & {
										["Tail.002"]: Bone & {
											["Tail.003"]: Bone & {
												["Tail.004"]: Bone & {
													["Tail.005"]: Bone;
												};
											};
										};
									};
								};
								["Hand.L"]: Bone;
								["Hand.R"]: Bone;
							};
						};
						["Leg.L"]: Bone;
						["Leg.R"]: Bone;
					};
				};
				["05_black_velo"]: Model & {
					BodyOld: MeshPart & {
						Root: Bone & {
							Body: Bone & {
								["Leg.L"]: Bone;
								["Hand.L"]: Bone;
								head: Bone;
								Tail: Bone & {
									["Tail.001"]: Bone & {
										["Tail.002"]: Bone & {
											["Tail.003"]: Bone & {
												["Tail.004"]: Bone;
											};
										};
									};
								};
								["Leg.R"]: Bone;
								["Hand.R"]: Bone;
							};
						};
					};
					Body: MeshPart;
				};
				["18_spirit_bear"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Hand_L_Original: CFrameValue;
						Body_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Foot_end_R_Initial: CFrameValue;
						Body_Composited: CFrameValue;
						Foot_R_Composited: CFrameValue;
						Tail_01_Initial: CFrameValue;
						Spirit_Bear_18_Composited: CFrameValue;
						Hand_R_Original: CFrameValue;
						Foot_end_L_Initial: CFrameValue;
						Foot_R_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						Hand_end_R_Composited: CFrameValue;
						Foot_end_R_Composited: CFrameValue;
						Head_Initial: CFrameValue;
						Tail_01_Composited: CFrameValue;
						Foot_R_Initial: CFrameValue;
						Hand_R_Initial: CFrameValue;
						Foot_L_Original: CFrameValue;
						Foot_end_L_Composited: CFrameValue;
						Hand_end_L_Original: CFrameValue;
						Foot_L_Initial: CFrameValue;
						Foot_end_L_Original: CFrameValue;
						Foot_L_Composited: CFrameValue;
						Hand_end_L_Initial: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Hand_L_Composited: CFrameValue;
						Hand_R_Composited: CFrameValue;
						Hand_end_R_Initial: CFrameValue;
						Hand_L_Initial: CFrameValue;
						RootPart_Initial: CFrameValue;
						Spirit_Bear_18_Original: CFrameValue;
						Foot_end_R_Original: CFrameValue;
						Hand_end_L_Composited: CFrameValue;
						Spirit_Bear_18_Initial: CFrameValue;
						Hand_end_R_Original: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								Foot_L: Bone;
								Hand_R: Bone;
								Head: Bone;
								Hand_L: Bone;
								Foot_R: Bone;
								Tail_01: Bone;
							};
						};
					};
				};
				["04_dino"]: Model & {
					Body: MeshPart & {
						["Foot.R"]: Bone;
						RootPart: Bone & {
							Body: Bone & {
								["wingP1.R"]: Bone & {
									["wingP2.R"]: Bone & {
										["wingP3.R"]: Bone & {
											["wingP4.R"]: Bone & {
												["wingP5.R"]: Bone & {
													["wingP6.R"]: Bone & {
														["wingP7.R"]: Bone & {
															["wingP8.R"]: Bone & {
																["wingP9.R"]: Bone;
															};
														};
													};
												};
											};
										};
									};
								};
								Heat: Bone;
								["wingP1.L"]: Bone & {
									["wingP2.L"]: Bone & {
										["wingP3.L"]: Bone & {
											["wingP4.L"]: Bone & {
												["wingP5.L"]: Bone & {
													["wingP6.L"]: Bone & {
														["wingP7.L"]: Bone & {
															["wingP8.L"]: Bone & {
																["wingP9.L"]: Bone;
															};
														};
													};
												};
											};
										};
									};
								};
								Tail1: Bone & {
									Tail2: Bone & {
										Tail3: Bone & {
											Tail4: Bone;
										};
									};
								};
							};
						};
						["Foot.L"]: Bone;
					};
				};
				["4_megatherium"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						BFoot_end_R_Composited: CFrameValue;
						Body_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Megatherium_4_Initial: CFrameValue;
						Body_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						BFoot_end_L_Original: CFrameValue;
						Tail_04_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						FFoot_end_L_Original: CFrameValue;
						Tail_03_Initial: CFrameValue;
						Megatherium_4_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						Tail_04_Composited: CFrameValue;
						Tail_04_Initial: CFrameValue;
						FFoot_end_R_Original: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						BFoot_R_Original: CFrameValue;
						FFoot_L_Original: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						Tail_02_Original: CFrameValue;
						Tail_01_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						FFoot_R_Original: CFrameValue;
						FFoot_end_R_Composited: CFrameValue;
						Tail_03_Original: CFrameValue;
						BFoot_L_Original: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						Tail_03_Composited: CFrameValue;
						Megatherium_4_Composited: CFrameValue;
						Head_Initial: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						BFoot_end_R_Original: CFrameValue;
						FFoot_end_L_Composited: CFrameValue;
						FFoot_end_R_Initial: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						FFoot_end_L_Initial: CFrameValue;
						BFoot_end_L_Composited: CFrameValue;
						BFoot_end_R_Initial: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						BFoot_end_L_Initial: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Head: Bone;
								FFoot_R: Bone;
								FFoot_L: Bone;
								Tail_01: Bone & {
									Tail_02: Bone & {
										Tail_03: Bone & {
											Tail_04: Bone;
										};
									};
								};
							};
						};
					};
				};
				["19_spirit_owl"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Foot_L_Original: CFrameValue;
						Wing_R_Original: CFrameValue;
						Spirit_Owl_19_Composited: CFrameValue;
						Wing_end_R_Original: CFrameValue;
						Wing_end_R_Initial: CFrameValue;
						Wing_R_Composited: CFrameValue;
						Foot_end_R_Initial: CFrameValue;
						Body_Composited: CFrameValue;
						Foot_R_Composited: CFrameValue;
						Spirit_Owl_19_Initial: CFrameValue;
						Foot_end_L_Initial: CFrameValue;
						Wing_end_L_Initial: CFrameValue;
						Foot_R_Original: CFrameValue;
						Spirit_Owl_19_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						Foot_L_Composited: CFrameValue;
						Head_Initial: CFrameValue;
						Foot_L_Initial: CFrameValue;
						Foot_R_Initial: CFrameValue;
						Wing_end_R_Composited: CFrameValue;
						Wing_end_L_Original: CFrameValue;
						Foot_end_L_Original: CFrameValue;
						Wing_R_Initial: CFrameValue;
						Wing_L_Initial: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Head_Original: CFrameValue;
						Wing_L_Original: CFrameValue;
						RootPart_Initial: CFrameValue;
						Foot_end_R_Composited: CFrameValue;
						Body_Original: CFrameValue;
						Wing_end_L_Composited: CFrameValue;
						Foot_end_R_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Wing_L_Composited: CFrameValue;
						Foot_end_L_Composited: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								Foot_L: Bone;
								Wing_R: Bone & {
									Wing_end_R: Bone;
								};
								Head: Bone;
								Foot_R: Bone;
								Wing_L: Bone & {
									Wing_end_L: Bone;
								};
							};
						};
					};
				};
				["06_mamuth"]: Model & {
					Body: MeshPart & {
						Rootpart: Bone & {
							["BLeg.L"]: Bone;
							["FLeg.R"]: Bone;
							["FLeg.L"]: Bone;
							["BLeg.R"]: Bone;
							Body: Bone & {
								Head: Bone & {
									tronk: Bone & {
										["tronk.001"]: Bone & {
											["tronk.002"]: Bone & {
												["tronk.003"]: Bone;
											};
										};
									};
								};
								tail: Bone & {
									["tail.001"]: Bone & {
										["tail.002"]: Bone & {
											["tail.003"]: Bone & {
												["tail.004"]: Bone & {
													["tail.005"]: Bone & {
														["tail.006"]: Bone;
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
				["11_scorpion"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Claws_Lower_R_Composited: CFrameValue;
						Claws_Lower_L_Initial: CFrameValue;
						Tail_01_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Scorpion_11_Initial: CFrameValue;
						Claws_R_Composited: CFrameValue;
						Foot_01_L_Original: CFrameValue;
						Tail_03_Initial: CFrameValue;
						Claws_L_Original: CFrameValue;
						Foot_02_R_Composited: CFrameValue;
						Foot_02_L_Composited: CFrameValue;
						Claws_R_Initial: CFrameValue;
						Head_Initial: CFrameValue;
						Tail_01_Composited: CFrameValue;
						Sting_Original: CFrameValue;
						Foot_end_03_L_Initial: CFrameValue;
						Claws_Lower_L_Original: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Scorpion_11_Original: CFrameValue;
						Foot_end_01_L_Original: CFrameValue;
						Foot_03_R_Composited: CFrameValue;
						Foot_end_03_L_Original: CFrameValue;
						Foot_01_R_Initial: CFrameValue;
						Body_Original: CFrameValue;
						Sting_Composited: CFrameValue;
						Foot_03_L_Original: CFrameValue;
						Foot_end_02_R_Initial: CFrameValue;
						Claws_L_Initial: CFrameValue;
						Claws_Lower_R_Original: CFrameValue;
						Claws_Lower_L_Composited: CFrameValue;
						Foot_end_02_L_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						Foot_end_03_L_Composited: CFrameValue;
						Foot_02_R_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						Foot_end_03_R_Initial: CFrameValue;
						Foot_03_L_Initial: CFrameValue;
						Foot_03_L_Composited: CFrameValue;
						Foot_02_L_Original: CFrameValue;
						Foot_end_02_L_Initial: CFrameValue;
						Foot_end_01_R_Initial: CFrameValue;
						Foot_03_R_Original: CFrameValue;
						Foot_end_01_R_Composited: CFrameValue;
						Foot_02_R_Initial: CFrameValue;
						Foot_end_02_L_Composited: CFrameValue;
						Foot_01_R_Composited: CFrameValue;
						Claws_R_Original: CFrameValue;
						RootPart_Initial: CFrameValue;
						Foot_end_02_R_Original: CFrameValue;
						Foot_02_L_Initial: CFrameValue;
						Tail_03_Original: CFrameValue;
						Foot_end_03_R_Original: CFrameValue;
						Foot_end_03_R_Composited: CFrameValue;
						Foot_end_01_L_Initial: CFrameValue;
						Foot_01_R_Original: CFrameValue;
						Tail_03_Composited: CFrameValue;
						Body_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						Foot_end_01_L_Composited: CFrameValue;
						Foot_01_L_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						Foot_01_L_Composited: CFrameValue;
						Claws_Lower_R_Initial: CFrameValue;
						Claws_L_Composited: CFrameValue;
						Foot_end_01_R_Original: CFrameValue;
						Foot_03_R_Initial: CFrameValue;
						Sting_Initial: CFrameValue;
						Scorpion_11_Composited: CFrameValue;
						Foot_end_02_R_Composited: CFrameValue;
						Tail_02_Original: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								Claws_L: Bone & {
									Claws_Lower_L: Bone;
								};
								Foot_03_L: Bone & {
									Foot_end_03_L: Bone;
								};
								Tail_01: Bone & {
									Tail_02: Bone & {
										Tail_03: Bone & {
											Sting: Bone;
										};
									};
								};
								Foot_02_R: Bone & {
									Foot_end_02_R: Bone;
								};
								Foot_01_L: Bone & {
									Foot_end_01_L: Bone;
								};
								Foot_03_R: Bone & {
									Foot_end_03_R: Bone;
								};
								Foot_01_R: Bone & {
									Foot_end_01_R: Bone;
								};
								Foot_02_L: Bone & {
									Foot_end_02_L: Bone;
								};
								Claws_R: Bone & {
									Claws_Lower_R: Bone;
								};
								Head: Bone;
							};
						};
					};
				};
				["20_spirit_wolf"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Tail_07_Composited: CFrameValue;
						Tail_06_Composited: CFrameValue;
						BFoot_end_R_Composited: CFrameValue;
						Body_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Tail_05_Composited: CFrameValue;
						Body_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						FFoot_L_Original: CFrameValue;
						Tail_04_Original: CFrameValue;
						BFoot_end_L_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						FFoot_end_L_Original: CFrameValue;
						Spirit_Wolf_20_Initial: CFrameValue;
						Tail_03_Initial: CFrameValue;
						Tail_05_Original: CFrameValue;
						Spirit_Wolf_20_Composited: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						BFoot_L_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						FFoot_R_Original: CFrameValue;
						Tail_04_Composited: CFrameValue;
						Tail_04_Initial: CFrameValue;
						Tail_06_Original: CFrameValue;
						FFoot_end_R_Original: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						Tail_06_Initial: CFrameValue;
						Tail_07_Initial: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						Tail_02_Original: CFrameValue;
						Tail_01_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						Head_Initial: CFrameValue;
						BFoot_end_R_Original: CFrameValue;
						Tail_03_Original: CFrameValue;
						Tail_07_Original: CFrameValue;
						Spirit_Wolf_20_Original: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						Tail_03_Composited: CFrameValue;
						BFoot_R_Original: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						FFoot_end_R_Composited: CFrameValue;
						FFoot_end_L_Composited: CFrameValue;
						FFoot_end_R_Initial: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						FFoot_end_L_Initial: CFrameValue;
						BFoot_end_L_Composited: CFrameValue;
						BFoot_end_R_Initial: CFrameValue;
						Tail_05_Initial: CFrameValue;
						BFoot_end_L_Initial: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Head: Bone;
								FFoot_R: Bone;
								FFoot_L: Bone;
								Tail_01: Bone & {
									Tail_02: Bone & {
										Tail_03: Bone & {
											Tail_04: Bone & {
												Tail_05: Bone & {
													Tail_06: Bone;
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
			["Run Animation "]: Model;
			["hover-anim"]: KeyframeSequence;
			["pets-v2"]: Folder & {
				["03_dodo"]: Model & {
					Body: MeshPart & {
						["Foot.R"]: Bone;
						RootPart: Bone & {
							Body: Bone & {
								["wing.R"]: Bone;
								tail: Bone;
								["wing.L"]: Bone;
								Head: Bone & {
									feather: Bone;
								};
							};
						};
						["Foot.L"]: Bone;
					};
				};
				["5_terror_bird"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Terror_Bird_5_Initial: CFrameValue;
						Body_Original: CFrameValue;
						tail_01_Composited: CFrameValue;
						Neck_01_Initial: CFrameValue;
						RootPart_Original: CFrameValue;
						Foot_end_R_Initial: CFrameValue;
						wing_end_R_Composited: CFrameValue;
						Body_Composited: CFrameValue;
						Foot_R_Composited: CFrameValue;
						wing_L_Original: CFrameValue;
						Foot_end_L_Initial: CFrameValue;
						Foot_R_Original: CFrameValue;
						wing_end_L_Composited: CFrameValue;
						RootPart_Composited: CFrameValue;
						wing_L_Composited: CFrameValue;
						tail_01_end_Initial: CFrameValue;
						Foot_end_L_Composited: CFrameValue;
						tail_01_Initial: CFrameValue;
						Neck_02_Composited: CFrameValue;
						wing_R_Original: CFrameValue;
						Foot_L_Original: CFrameValue;
						Foot_L_Composited: CFrameValue;
						tail_01_Original: CFrameValue;
						Foot_L_Initial: CFrameValue;
						Foot_R_Initial: CFrameValue;
						Neck_02_Original: CFrameValue;
						wing_R_Composited: CFrameValue;
						wing_L_Initial: CFrameValue;
						wing_end_R_Initial: CFrameValue;
						wing_end_R_Original: CFrameValue;
						wing_R_Initial: CFrameValue;
						Foot_end_R_Composited: CFrameValue;
						Foot_end_L_Original: CFrameValue;
						tail_01_end_Original: CFrameValue;
						Head_Initial: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Terror_Bird_5_Original: CFrameValue;
						Terror_Bird_5_Composited: CFrameValue;
						tail_01_end_Composited: CFrameValue;
						wing_end_L_Initial: CFrameValue;
						Neck_02_Initial: CFrameValue;
						wing_end_L_Original: CFrameValue;
						Foot_end_R_Original: CFrameValue;
						Neck_01_Original: CFrameValue;
						RootPart_Initial: CFrameValue;
						Neck_01_Composited: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								Neck_01: Bone & {
									Neck_02: Bone & {
										Head: Bone;
									};
								};
								wing_R: Bone;
								tail_01: Bone;
								Foot_L: Bone;
								Foot_R: Bone;
								wing_L: Bone;
							};
						};
					};
				};
				["2_coelodonta"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						["FFoot.R_end_Original"]: CFrameValue;
						Coelodonta_2_Composited: CFrameValue;
						Body_Original: CFrameValue;
						["BFoot.R_end_Composited"]: CFrameValue;
						["BFoot.R_end_Initial"]: CFrameValue;
						["FFoot.R_end_Composited"]: CFrameValue;
						RootPart_Original: CFrameValue;
						["FFoot.R_end_Initial"]: CFrameValue;
						Tail1_Composited: CFrameValue;
						Body_Composited: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						FFoot_L_Original: CFrameValue;
						Tail1_Initial: CFrameValue;
						Coelodonta_2_Initial: CFrameValue;
						RootPart_Composited: CFrameValue;
						["BFoot.R_end_Original"]: CFrameValue;
						Tail2_Original: CFrameValue;
						FFoot_R_Original: CFrameValue;
						BFoot_R_Original: CFrameValue;
						Tail2_Composited: CFrameValue;
						Head_Initial: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						BFoot_L_Original: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Coelodonta_2_Original: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						Tail2_Initial: CFrameValue;
						Tail1_Original: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Head: Bone;
								FFoot_R: Bone;
								FFoot_L: Bone;
								Tail1: Bone & {
									Tail2: Bone;
								};
							};
						};
					};
				};
				["07_bracho"]: Model & {
					Body: MeshPart;
				};
				["7_guardian_dog"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Chain_01_Original: CFrameValue;
						Chain_02_Initial: CFrameValue;
						BFoot_end_R_Composited: CFrameValue;
						Body_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						FFoot_end_R_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						Guardian_Dog_7_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						Chain_02_Original: CFrameValue;
						Guardian_Dog_7_Initial: CFrameValue;
						RootPart_Composited: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						Chain_01_Initial: CFrameValue;
						FFoot_end_L_Original: CFrameValue;
						FFoot_R_Original: CFrameValue;
						BFoot_end_R_Original: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						Chain_02_Composited: CFrameValue;
						BFoot_R_Original: CFrameValue;
						FFoot_L_Original: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						Tail_02_Original: CFrameValue;
						Tail_01_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						FFoot_end_R_Original: CFrameValue;
						BFoot_end_L_Original: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						BFoot_L_Original: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						Chain_01_Composited: CFrameValue;
						Head_Original: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						Guardian_Dog_7_Composited: CFrameValue;
						FFoot_end_L_Composited: CFrameValue;
						FFoot_end_R_Initial: CFrameValue;
						Head_Initial: CFrameValue;
						FFoot_end_L_Initial: CFrameValue;
						BFoot_end_L_Composited: CFrameValue;
						BFoot_end_R_Initial: CFrameValue;
						Body_Composited: CFrameValue;
						BFoot_end_L_Initial: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Head: Bone;
								Chain_01: Bone & {
									Chain_02: Bone;
								};
								FFoot_R: Bone;
								FFoot_L: Bone;
								Tail_01: Bone & {
									Tail_02: Bone;
								};
							};
						};
					};
				};
				["13_bearded_dragon"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Tail_11_Composited: CFrameValue;
						Bearded_Dragon_13_Composited: CFrameValue;
						Tail_01_Original: CFrameValue;
						Bearded_Dragon_13_Initial: CFrameValue;
						RootPart_Original: CFrameValue;
						BFoot_end_R_Original: CFrameValue;
						BFoot_end_L_Original: CFrameValue;
						Tail_04_Original: CFrameValue;
						FFoot_end_R_Original: CFrameValue;
						FFoot_end_L_Original: CFrameValue;
						Tail_03_Initial: CFrameValue;
						Tail_09_Composited: CFrameValue;
						Tail_05_Initial: CFrameValue;
						Tail_10_Composited: CFrameValue;
						Tail_06_Original: CFrameValue;
						BFoot_R_Original: CFrameValue;
						Tail_07_Initial: CFrameValue;
						Tail_02_Original: CFrameValue;
						Tail_05_Original: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						Tail_09_Original: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_05_Composited: CFrameValue;
						Tail_08_Composited: CFrameValue;
						Tail_10_Original: CFrameValue;
						Tail_08_Original: CFrameValue;
						BFoot_end_R_Composited: CFrameValue;
						Body_Original: CFrameValue;
						FFoot_end_R_Composited: CFrameValue;
						Tail_08_Initial: CFrameValue;
						Tail_11_Original: CFrameValue;
						joint10_Initial: CFrameValue;
						Tail_10_Initial: CFrameValue;
						RootPart_Composited: CFrameValue;
						FFoot_R_Original: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						Tail_11_Initial: CFrameValue;
						Tail_04_Initial: CFrameValue;
						FFoot_L_Original: CFrameValue;
						Bearded_Dragon_13_Original: CFrameValue;
						joint10_Composited: CFrameValue;
						Tail_06_Initial: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						joint10_Original: CFrameValue;
						Tail_07_Composited: CFrameValue;
						Tail_06_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						Tail_01_Composited: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						Tail_03_Original: CFrameValue;
						Tail_07_Original: CFrameValue;
						BFoot_L_Original: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						Head_Initial: CFrameValue;
						Tail_03_Composited: CFrameValue;
						Body_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						Tail_01_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						FFoot_end_L_Composited: CFrameValue;
						FFoot_end_R_Initial: CFrameValue;
						Tail_04_Composited: CFrameValue;
						FFoot_end_L_Initial: CFrameValue;
						BFoot_end_L_Composited: CFrameValue;
						BFoot_end_R_Initial: CFrameValue;
						Tail_09_Initial: CFrameValue;
						BFoot_end_L_Initial: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Head: Bone;
								FFoot_R: Bone;
								FFoot_L: Bone;
								Tail_01: Bone & {
									Tail_02: Bone & {
										Tail_03: Bone & {
											Tail_04: Bone & {
												Tail_05: Bone & {
													Tail_06: Bone & {
														Tail_07: Bone & {
															Tail_08: Bone & {
																Tail_09: Bone & {
																	Tail_10: Bone & {
																		Tail_11: Bone;
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
				["3_glyptodon"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						["FFoot.R_end_Original"]: CFrameValue;
						Body_Original: CFrameValue;
						Glyptodon_3_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						["BFoot.R_end_Initial"]: CFrameValue;
						["FFoot.R_end_Composited"]: CFrameValue;
						RootPart_Original: CFrameValue;
						["FFoot.R_end_Initial"]: CFrameValue;
						Body_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						FFoot_L_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						Tail_03_Initial: CFrameValue;
						Glyptodon_3_Initial: CFrameValue;
						RootPart_Composited: CFrameValue;
						["BFoot.R_end_Original"]: CFrameValue;
						FFoot_R_Original: CFrameValue;
						BFoot_R_Original: CFrameValue;
						Tail_02_Original: CFrameValue;
						Tail_01_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						BFoot_L_Original: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						Tail_03_Composited: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						Head_Composited: CFrameValue;
						["BFoot.R_end_Composited"]: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						Glyptodon_3_Composited: CFrameValue;
						Tail_03_Original: CFrameValue;
						Head_Initial: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Tail_01: Bone & {
									Tail_02: Bone & {
										Tail_03: Bone;
									};
								};
								FFoot_R: Bone;
								FFoot_L: Bone;
								Head: Bone;
							};
						};
					};
				};
				["16_sphinx"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Sphinx_16_Original: CFrameValue;
						BFoot_end_R_Composited: CFrameValue;
						Body_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						FFoot_end_R_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						FFoot_L_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						FFoot_end_L_Original: CFrameValue;
						Tail_03_Initial: CFrameValue;
						Sphinx_16_Composited: CFrameValue;
						RootPart_Composited: CFrameValue;
						FFoot_R_Original: CFrameValue;
						BFoot_end_L_Initial: CFrameValue;
						BFoot_end_L_Original: CFrameValue;
						BFoot_R_Original: CFrameValue;
						Tail_03_Original: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						Tail_02_Original: CFrameValue;
						Tail_01_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						BFoot_L_Original: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						Tail_03_Composited: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						FFoot_end_R_Original: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						BFoot_end_R_Original: CFrameValue;
						FFoot_end_L_Composited: CFrameValue;
						FFoot_end_R_Initial: CFrameValue;
						Head_Initial: CFrameValue;
						FFoot_end_L_Initial: CFrameValue;
						BFoot_end_L_Composited: CFrameValue;
						BFoot_end_R_Initial: CFrameValue;
						Body_Composited: CFrameValue;
						Sphinx_16_Initial: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Head: Bone;
								FFoot_R: Bone;
								FFoot_L: Bone;
								Tail_01: Bone & {
									Tail_02: Bone & {
										Tail_03: Bone;
									};
								};
							};
						};
					};
				};
				["8_imagotaria"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Hand_L_Original: CFrameValue;
						Body_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Hand_End_R_Composited: CFrameValue;
						Body_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						Hand_02_L_Original: CFrameValue;
						Tail_04_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						Hand_R_Original: CFrameValue;
						Tail_03_Initial: CFrameValue;
						Hand_02_R_Original: CFrameValue;
						Hand_End_R_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						Hand_End_L_Initial: CFrameValue;
						Hand_End_L_Original: CFrameValue;
						Tail_04_Composited: CFrameValue;
						Tail_04_Initial: CFrameValue;
						Hand_End_L_Composited: CFrameValue;
						Hand_02_L_Composited: CFrameValue;
						Hand_02_R_Initial: CFrameValue;
						Hand_02_L_Initial: CFrameValue;
						Imagotaria_8_Original: CFrameValue;
						Tail_end_R_Composited: CFrameValue;
						Tail_02_Original: CFrameValue;
						Tail_05_Original: CFrameValue;
						RootPart_Initial: CFrameValue;
						Hand_L_Initial: CFrameValue;
						Tail_end_R_Original: CFrameValue;
						Tail_03_Original: CFrameValue;
						Hand_L_Composited: CFrameValue;
						Hand_End_R_Initial: CFrameValue;
						Hand_02_R_Composited: CFrameValue;
						Hand_R_Initial: CFrameValue;
						Tail_03_Composited: CFrameValue;
						Head_Initial: CFrameValue;
						Tail_end_L_Initial: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						Hand_R_Composited: CFrameValue;
						Imagotaria_8_Composited: CFrameValue;
						Tail_end_L_Original: CFrameValue;
						Tail_end_R_Initial: CFrameValue;
						Tail_end_L_Composited: CFrameValue;
						Imagotaria_8_Initial: CFrameValue;
						Tail_01_Composited: CFrameValue;
						Tail_05_Initial: CFrameValue;
						Tail_05_Composited: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								Hand_L: Bone & {
									Hand_02_L: Bone;
								};
								Tail_01: Bone & {
									Tail_02: Bone & {
										Tail_03: Bone & {
											Tail_04: Bone & {
												Tail_05: Bone;
											};
										};
									};
								};
								Hand_R: Bone & {
									Hand_02_R: Bone;
								};
								Head: Bone;
							};
						};
					};
				};
				["14_horned_cobra"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Body_06_Composited: CFrameValue;
						Neck_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						Body_02_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Body_03_Composited: CFrameValue;
						Horned_Cobra_14_Initial: CFrameValue;
						Tail_02_Composited: CFrameValue;
						Body_05_Initial: CFrameValue;
						Tail_04_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						Body_06_Original: CFrameValue;
						Body_01_Initial: CFrameValue;
						Horned_Cobra_14_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						Neck_Initial: CFrameValue;
						Tail_04_Composited: CFrameValue;
						Tail_04_Initial: CFrameValue;
						Body_04_Initial: CFrameValue;
						Body_02_Composited: CFrameValue;
						Body_04_Original: CFrameValue;
						Head_Initial: CFrameValue;
						Tail_01_Composited: CFrameValue;
						Body_05_Composited: CFrameValue;
						Body_03_Original: CFrameValue;
						Body_05_Original: CFrameValue;
						Tail_03_Original: CFrameValue;
						Body_07_Initial: CFrameValue;
						Tail_03_Initial: CFrameValue;
						Body_02_Initial: CFrameValue;
						Tail_03_Composited: CFrameValue;
						Tail_02_Initial: CFrameValue;
						Tail_02_Original: CFrameValue;
						Head_Composited: CFrameValue;
						Head_Original: CFrameValue;
						Body_07_Original: CFrameValue;
						Body_04_Composited: CFrameValue;
						Body_01_Original: CFrameValue;
						Body_07_Composited: CFrameValue;
						Neck_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						Body_06_Initial: CFrameValue;
						Body_03_Initial: CFrameValue;
						Body_01_Composited: CFrameValue;
						Horned_Cobra_14_Composited: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Head: Bone & {
								Neck: Bone & {
									Body_01: Bone & {
										Body_02: Bone & {
											Body_03: Bone & {
												Body_04: Bone & {
													Body_05: Bone & {
														Body_06: Bone & {
															Body_07: Bone & {
																Tail_01: Bone & {
																	Tail_02: Bone & {
																		Tail_03: Bone & {
																			Tail_04: Bone;
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
				["01_sabertooth"]: Model & {
					Body: MeshPart & {
						["BLeg.L"]: Bone;
						["FLeg.R"]: Bone;
						["FLeg.L"]: Bone;
						tail: Bone & {
							["tail.001"]: Bone & {
								["tail.002"]: Bone & {
									["tail.003"]: Bone & {
										["tail.004"]: Bone;
									};
								};
							};
						};
						["BLeg.R"]: Bone;
						body: Bone & {
							head: Bone;
						};
					};
				};
				["9_guardian_crocodile"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Body_Original: CFrameValue;
						tail_02_Original: CFrameValue;
						tail_01_Composited: CFrameValue;
						wing_R_Initial: CFrameValue;
						RootPart_Original: CFrameValue;
						Foot_end_R_Initial: CFrameValue;
						wing_end_R_Composited: CFrameValue;
						Body_Composited: CFrameValue;
						Foot_R_Composited: CFrameValue;
						wing_L_Original: CFrameValue;
						tail_02_Initial: CFrameValue;
						Foot_end_L_Initial: CFrameValue;
						Foot_R_Original: CFrameValue;
						wing_end_L_Composited: CFrameValue;
						RootPart_Composited: CFrameValue;
						Guardian_Crocodile_9_Initial: CFrameValue;
						Foot_end_R_Composited: CFrameValue;
						wing_R_Original: CFrameValue;
						tail_end_Initial: CFrameValue;
						tail_01_Original: CFrameValue;
						Foot_L_Initial: CFrameValue;
						Foot_R_Initial: CFrameValue;
						Guardian_Crocodile_9_Original: CFrameValue;
						wing_R_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						wing_L_Initial: CFrameValue;
						wing_L_Composited: CFrameValue;
						Foot_end_L_Composited: CFrameValue;
						tail_02_Composited: CFrameValue;
						Foot_end_L_Original: CFrameValue;
						Foot_L_Original: CFrameValue;
						Foot_L_Composited: CFrameValue;
						tail_01_Initial: CFrameValue;
						Body_Initial: CFrameValue;
						tail_end_Composited: CFrameValue;
						wing_end_R_Initial: CFrameValue;
						wing_end_R_Original: CFrameValue;
						wing_end_L_Initial: CFrameValue;
						Head_Initial: CFrameValue;
						wing_end_L_Original: CFrameValue;
						Foot_end_R_Original: CFrameValue;
						tail_end_Original: CFrameValue;
						Head_Composited: CFrameValue;
						Guardian_Crocodile_9_Composited: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								Foot_L: Bone & {
									Foot_end_L: Bone;
								};
								wing_R: Bone;
								Head: Bone;
								wing_L: Bone;
								Foot_R: Bone & {
									Foot_end_R: Bone;
								};
								tail_01: Bone & {
									tail_02: Bone & {
										tail_end: Bone;
									};
								};
							};
						};
					};
				};
				Mesh: SpecialMesh;
				["15_stripped_owl"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Hand_L_Original: CFrameValue;
						Body_Original: CFrameValue;
						Foot_end_L_Composited: CFrameValue;
						Foot_end_R_Initial: CFrameValue;
						Body_Composited: CFrameValue;
						Foot_R_Composited: CFrameValue;
						Hand_R_Original: CFrameValue;
						Foot_end_L_Initial: CFrameValue;
						Foot_R_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						Hand_end_R_Composited: CFrameValue;
						ra_15_Composited: CFrameValue;
						Foot_L_Composited: CFrameValue;
						ra_15_Initial: CFrameValue;
						Head_Initial: CFrameValue;
						Foot_L_Initial: CFrameValue;
						Foot_R_Initial: CFrameValue;
						Hand_R_Initial: CFrameValue;
						Hand_end_L_Original: CFrameValue;
						Hand_end_L_Initial: CFrameValue;
						Foot_end_L_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Hand_L_Initial: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Hand_L_Composited: CFrameValue;
						Hand_R_Composited: CFrameValue;
						ra_15_Original: CFrameValue;
						Foot_end_R_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						Foot_L_Original: CFrameValue;
						Foot_end_R_Original: CFrameValue;
						Hand_end_L_Composited: CFrameValue;
						Hand_end_R_Initial: CFrameValue;
						Hand_end_R_Original: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								Foot_L: Bone;
								Hand_R: Bone;
								Head: Bone;
								Hand_L: Bone;
								Foot_R: Bone;
							};
						};
					};
				};
				["6_behemotops"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						BFoot_end_R_Composited: CFrameValue;
						Body_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						Behemotops_6_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Body_Composited: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						BFoot_end_L_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						FFoot_end_L_Original: CFrameValue;
						Behemotops_6_Composited: CFrameValue;
						RootPart_Composited: CFrameValue;
						Behemotops_6_Initial: CFrameValue;
						FFoot_R_Original: CFrameValue;
						BFoot_R_Original: CFrameValue;
						FFoot_end_R_Composited: CFrameValue;
						Tail_02_Original: CFrameValue;
						Tail_01_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						FFoot_end_R_Original: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						BFoot_L_Original: CFrameValue;
						FFoot_L_Original: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						Head_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						FFoot_end_L_Composited: CFrameValue;
						FFoot_end_R_Initial: CFrameValue;
						Head_Initial: CFrameValue;
						FFoot_end_L_Initial: CFrameValue;
						BFoot_end_L_Composited: CFrameValue;
						BFoot_end_R_Initial: CFrameValue;
						BFoot_end_R_Original: CFrameValue;
						BFoot_end_L_Initial: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Head: Bone;
								FFoot_R: Bone;
								FFoot_L: Bone;
								Tail_01: Bone & {
									Tail_02: Bone;
								};
							};
						};
					};
				};
				["10_giant_crab"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Claws_Lower_R_Composited: CFrameValue;
						Eye_L_Initial: CFrameValue;
						Eye_End_R_Initial: CFrameValue;
						Eye_End_L_Composited: CFrameValue;
						RootPart_Original: CFrameValue;
						Foot_02_L_Initial: CFrameValue;
						Foot_01_R_Original: CFrameValue;
						Foot_01_L_Original: CFrameValue;
						Claws_L_Original: CFrameValue;
						Foot_02_R_Composited: CFrameValue;
						Foot_02_L_Composited: CFrameValue;
						Claws_R_Initial: CFrameValue;
						Foot_end_03_R_Composited: CFrameValue;
						Claws_L_Composited: CFrameValue;
						Eye_R_Composited: CFrameValue;
						Giant_Crab_10_Composited: CFrameValue;
						Foot_03_R_Initial: CFrameValue;
						Eye_End_R_Original: CFrameValue;
						Claws_Lower_L_Original: CFrameValue;
						Body_Initial: CFrameValue;
						Foot_01_L_Composited: CFrameValue;
						Foot_end_01_L_Original: CFrameValue;
						Giant_Crab_10_Initial: CFrameValue;
						Foot_end_03_L_Original: CFrameValue;
						Foot_03_L_Initial: CFrameValue;
						Body_Original: CFrameValue;
						Shell_Original: CFrameValue;
						Foot_03_L_Original: CFrameValue;
						Foot_end_02_R_Initial: CFrameValue;
						Claws_L_Initial: CFrameValue;
						Claws_Lower_R_Original: CFrameValue;
						Claws_Lower_L_Composited: CFrameValue;
						Foot_end_02_L_Original: CFrameValue;
						Eye_L_Composited: CFrameValue;
						Eye_R_Initial: CFrameValue;
						Foot_02_R_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						Foot_end_03_R_Initial: CFrameValue;
						Claws_Lower_L_Initial: CFrameValue;
						Foot_end_03_L_Initial: CFrameValue;
						Foot_02_L_Original: CFrameValue;
						Foot_end_02_L_Initial: CFrameValue;
						Foot_end_01_R_Initial: CFrameValue;
						Foot_03_R_Original: CFrameValue;
						Giant_Crab_10_Original: CFrameValue;
						Foot_02_R_Initial: CFrameValue;
						Foot_01_R_Initial: CFrameValue;
						Foot_end_02_R_Composited: CFrameValue;
						Claws_R_Original: CFrameValue;
						RootPart_Initial: CFrameValue;
						Foot_end_02_R_Original: CFrameValue;
						Eye_End_R_Composited: CFrameValue;
						Eye_End_L_Original: CFrameValue;
						Shell_Composited: CFrameValue;
						Foot_03_L_Composited: CFrameValue;
						Shell_Initial: CFrameValue;
						Foot_end_02_L_Composited: CFrameValue;
						Body_Composited: CFrameValue;
						Claws_R_Composited: CFrameValue;
						Foot_03_R_Composited: CFrameValue;
						Eye_End_L_Initial: CFrameValue;
						Foot_end_01_L_Initial: CFrameValue;
						Foot_end_03_L_Composited: CFrameValue;
						Foot_01_R_Composited: CFrameValue;
						Foot_end_01_L_Composited: CFrameValue;
						Foot_01_L_Initial: CFrameValue;
						Foot_end_03_R_Original: CFrameValue;
						Foot_end_01_R_Composited: CFrameValue;
						Foot_end_01_R_Original: CFrameValue;
						Eye_R_Original: CFrameValue;
						Claws_Lower_R_Initial: CFrameValue;
						Eye_L_Original: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								Foot_03_R: Bone & {
									Foot_end_03_R: Bone;
								};
								Eye_R: Bone & {
									Eye_End_R: Bone;
								};
								Foot_03_L: Bone & {
									Foot_end_03_L: Bone;
								};
								Foot_02_R: Bone & {
									Foot_end_02_R: Bone;
								};
								Eye_L: Bone & {
									Eye_End_L: Bone;
								};
								Claws_L: Bone & {
									Claws_Lower_L: Bone;
								};
								Foot_01_L: Bone & {
									Foot_end_01_L: Bone;
								};
								Foot_01_R: Bone & {
									Foot_end_01_R: Bone;
								};
								Foot_02_L: Bone & {
									Foot_end_02_L: Bone;
								};
								Claws_R: Bone & {
									Claws_Lower_R: Bone;
								};
								Shell: Bone;
							};
						};
					};
				};
				["02_triceratops"]: Model & {
					Body: MeshPart & {
						Root: Bone & {
							["BLeg.L"]: Bone;
							["FLeg.R"]: Bone;
							["FLeg.L"]: Bone;
							["BLeg.R"]: Bone;
							Body: Bone & {
								head: Bone;
								["Body.001"]: Bone & {
									["Body.002"]: Bone & {
										["Body.003"]: Bone & {
											["Body.004"]: Bone & {
												["Body.005"]: Bone;
											};
										};
									};
								};
							};
						};
					};
				};
				["1_castoroides"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Castoroides_1_Initial: CFrameValue;
						BFoot_end_R_Composited: CFrameValue;
						Body_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						FFoot_end_R_Composited: CFrameValue;
						BFoot_end_R_Original: CFrameValue;
						BFoot_end_L_Original: CFrameValue;
						FFoot_end_R_Original: CFrameValue;
						FFoot_end_L_Original: CFrameValue;
						Tail_03_Initial: CFrameValue;
						RootPart_Composited: CFrameValue;
						Tail_03_Original: CFrameValue;
						FFoot_R_Original: CFrameValue;
						FFoot_L_Original: CFrameValue;
						Castoroides_1_Original: CFrameValue;
						Tail_01_Composited: CFrameValue;
						BFoot_R_Original: CFrameValue;
						Tail_02_Composited: CFrameValue;
						Tail_01_Initial: CFrameValue;
						Tail_02_Original: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						Body_Composited: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						BFoot_L_Original: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						Heat_Initial: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						Tail_03_Composited: CFrameValue;
						Heat_Original: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						FFoot_end_L_Composited: CFrameValue;
						Castoroides_1_Composited: CFrameValue;
						FFoot_end_R_Initial: CFrameValue;
						FFoot_end_L_Initial: CFrameValue;
						BFoot_end_L_Composited: CFrameValue;
						Heat_Composited: CFrameValue;
						BFoot_end_R_Initial: CFrameValue;
						BFoot_end_L_Initial: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Tail_01: Bone & {
									Tail_02: Bone & {
										Tail_03: Bone;
									};
								};
								FFoot_R: Bone;
								FFoot_L: Bone;
								Heat: Bone;
							};
						};
					};
				};
				["12_leon_desert"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						BFoot_end_R_Composited: CFrameValue;
						Body_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						Leon_Desert_12_Initial: CFrameValue;
						RootPart_Original: CFrameValue;
						FFoot_end_R_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						BFoot_end_L_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						FFoot_end_L_Original: CFrameValue;
						Tail_03_Initial: CFrameValue;
						RootPart_Composited: CFrameValue;
						FFoot_R_Original: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						FFoot_end_L_Composited: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						BFoot_R_Original: CFrameValue;
						FFoot_L_Original: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						Tail_02_Original: CFrameValue;
						Tail_01_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						Body_Composited: CFrameValue;
						Head_Initial: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						BFoot_L_Original: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						Tail_03_Composited: CFrameValue;
						Tail_03_Original: CFrameValue;
						Leon_Desert_12_Original: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						BFoot_end_R_Original: CFrameValue;
						Leon_Desert_12_Composited: CFrameValue;
						FFoot_end_R_Initial: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						FFoot_end_L_Initial: CFrameValue;
						BFoot_end_L_Composited: CFrameValue;
						BFoot_end_R_Initial: CFrameValue;
						FFoot_end_R_Original: CFrameValue;
						BFoot_end_L_Initial: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Head: Bone;
								FFoot_R: Bone;
								FFoot_L: Bone;
								Tail_01: Bone & {
									Tail_02: Bone & {
										Tail_03: Bone;
									};
								};
							};
						};
					};
				};
				["17_anubis"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Neck_Original: CFrameValue;
						Hand_L_Original: CFrameValue;
						Body_Original: CFrameValue;
						Anubis_17_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Foot_end_R_Initial: CFrameValue;
						Body_Composited: CFrameValue;
						Foot_R_Composited: CFrameValue;
						Hand_R_Original: CFrameValue;
						Foot_end_L_Initial: CFrameValue;
						Foot_R_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						Neck_Initial: CFrameValue;
						Foot_end_R_Composited: CFrameValue;
						Hand_L_Initial: CFrameValue;
						Foot_L_Initial: CFrameValue;
						Foot_R_Initial: CFrameValue;
						Hand_end_L_Initial: CFrameValue;
						Hand_R_Initial: CFrameValue;
						Foot_end_L_Composited: CFrameValue;
						Foot_L_Original: CFrameValue;
						Hand_end_L_Original: CFrameValue;
						Foot_L_Composited: CFrameValue;
						Foot_end_L_Original: CFrameValue;
						Hand_end_R_Initial: CFrameValue;
						Head_Initial: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Hand_L_Composited: CFrameValue;
						Hand_R_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						Anubis_17_Composited: CFrameValue;
						Neck_Composited: CFrameValue;
						Anubis_17_Initial: CFrameValue;
						Foot_end_R_Original: CFrameValue;
						Hand_end_L_Composited: CFrameValue;
						Hand_end_R_Composited: CFrameValue;
						Hand_end_R_Original: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								Foot_L: Bone;
								Hand_R: Bone;
								Hand_L: Bone;
								Foot_R: Bone;
								Neck: Bone & {
									Head: Bone;
								};
							};
						};
					};
				};
				["09_stego"]: Model & {
					Body: MeshPart & {
						["FFoot.L"]: Bone;
						["BFoot.R"]: Bone;
						["BFoot.L"]: Bone;
						RootPart: Bone & {
							Body: Bone & {
								Neck: Bone & {
									Neck2: Bone & {
										Heat: Bone;
									};
								};
								Tail: Bone & {
									["Tail.001"]: Bone & {
										["Tail.002"]: Bone & {
											["Tail.004"]: Bone & {
												["Tail.005"]: Bone;
											};
										};
									};
								};
							};
						};
						["FFoot.R"]: Bone;
					};
				};
				["08_trex"]: Model & {
					Body: MeshPart & {
						Root: Bone & {
							Body: Bone & {
								head: Bone;
								Tail: Bone & {
									["Tail.001"]: Bone & {
										["Tail.002"]: Bone & {
											["Tail.003"]: Bone & {
												["Tail.004"]: Bone & {
													["Tail.005"]: Bone;
												};
											};
										};
									};
								};
								["Hand.L"]: Bone;
								["Hand.R"]: Bone;
							};
						};
						["Leg.L"]: Bone;
						["Leg.R"]: Bone;
					};
				};
				["05_black_velo"]: Model & {
					Body: MeshPart & {
						Root: Bone & {
							Body: Bone & {
								["Leg.L"]: Bone;
								["Hand.L"]: Bone;
								head: Bone;
								Tail: Bone & {
									["Tail.001"]: Bone & {
										["Tail.002"]: Bone & {
											["Tail.003"]: Bone & {
												["Tail.004"]: Bone;
											};
										};
									};
								};
								["Leg.R"]: Bone;
								["Hand.R"]: Bone;
							};
						};
					};
				};
				["18_spirit_bear"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Hand_L_Original: CFrameValue;
						Body_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Foot_end_R_Initial: CFrameValue;
						Body_Composited: CFrameValue;
						Foot_R_Composited: CFrameValue;
						Tail_01_Initial: CFrameValue;
						Spirit_Bear_18_Composited: CFrameValue;
						Hand_R_Original: CFrameValue;
						Foot_end_L_Initial: CFrameValue;
						Foot_R_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						Hand_end_R_Composited: CFrameValue;
						Foot_end_R_Composited: CFrameValue;
						Head_Initial: CFrameValue;
						Tail_01_Composited: CFrameValue;
						Foot_R_Initial: CFrameValue;
						Hand_R_Initial: CFrameValue;
						Foot_L_Original: CFrameValue;
						Foot_end_L_Composited: CFrameValue;
						Hand_end_L_Original: CFrameValue;
						Foot_L_Initial: CFrameValue;
						Foot_end_L_Original: CFrameValue;
						Foot_L_Composited: CFrameValue;
						Hand_end_L_Initial: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Hand_L_Composited: CFrameValue;
						Hand_R_Composited: CFrameValue;
						Hand_end_R_Initial: CFrameValue;
						Hand_L_Initial: CFrameValue;
						RootPart_Initial: CFrameValue;
						Spirit_Bear_18_Original: CFrameValue;
						Foot_end_R_Original: CFrameValue;
						Hand_end_L_Composited: CFrameValue;
						Spirit_Bear_18_Initial: CFrameValue;
						Hand_end_R_Original: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								Foot_L: Bone;
								Hand_R: Bone;
								Head: Bone;
								Hand_L: Bone;
								Foot_R: Bone;
								Tail_01: Bone;
							};
						};
					};
				};
				["04_dino"]: Model & {
					Body: MeshPart & {
						["Foot.R"]: Bone;
						RootPart: Bone & {
							Body: Bone & {
								["wingP1.R"]: Bone & {
									["wingP2.R"]: Bone & {
										["wingP3.R"]: Bone & {
											["wingP4.R"]: Bone & {
												["wingP5.R"]: Bone & {
													["wingP6.R"]: Bone & {
														["wingP7.R"]: Bone & {
															["wingP8.R"]: Bone & {
																["wingP9.R"]: Bone;
															};
														};
													};
												};
											};
										};
									};
								};
								Heat: Bone;
								["wingP1.L"]: Bone & {
									["wingP2.L"]: Bone & {
										["wingP3.L"]: Bone & {
											["wingP4.L"]: Bone & {
												["wingP5.L"]: Bone & {
													["wingP6.L"]: Bone & {
														["wingP7.L"]: Bone & {
															["wingP8.L"]: Bone & {
																["wingP9.L"]: Bone;
															};
														};
													};
												};
											};
										};
									};
								};
								Tail1: Bone & {
									Tail2: Bone & {
										Tail3: Bone & {
											Tail4: Bone;
										};
									};
								};
							};
						};
						["Foot.L"]: Bone;
					};
				};
				["4_megatherium"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						BFoot_end_R_Composited: CFrameValue;
						Body_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Megatherium_4_Initial: CFrameValue;
						Body_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						BFoot_end_L_Original: CFrameValue;
						Tail_04_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						FFoot_end_L_Original: CFrameValue;
						Tail_03_Initial: CFrameValue;
						Megatherium_4_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						Tail_04_Composited: CFrameValue;
						Tail_04_Initial: CFrameValue;
						FFoot_end_R_Original: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						BFoot_R_Original: CFrameValue;
						FFoot_L_Original: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						Tail_02_Original: CFrameValue;
						Tail_01_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						FFoot_R_Original: CFrameValue;
						FFoot_end_R_Composited: CFrameValue;
						Tail_03_Original: CFrameValue;
						BFoot_L_Original: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						Tail_03_Composited: CFrameValue;
						Megatherium_4_Composited: CFrameValue;
						Head_Initial: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						BFoot_end_R_Original: CFrameValue;
						FFoot_end_L_Composited: CFrameValue;
						FFoot_end_R_Initial: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						FFoot_end_L_Initial: CFrameValue;
						BFoot_end_L_Composited: CFrameValue;
						BFoot_end_R_Initial: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						BFoot_end_L_Initial: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Head: Bone;
								FFoot_R: Bone;
								FFoot_L: Bone;
								Tail_01: Bone & {
									Tail_02: Bone & {
										Tail_03: Bone & {
											Tail_04: Bone;
										};
									};
								};
							};
						};
					};
				};
				["19_spirit_owl"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Foot_L_Original: CFrameValue;
						Wing_R_Original: CFrameValue;
						Spirit_Owl_19_Composited: CFrameValue;
						Wing_end_R_Original: CFrameValue;
						Wing_end_R_Initial: CFrameValue;
						Wing_R_Composited: CFrameValue;
						Foot_end_R_Initial: CFrameValue;
						Body_Composited: CFrameValue;
						Foot_R_Composited: CFrameValue;
						Spirit_Owl_19_Initial: CFrameValue;
						Foot_end_L_Initial: CFrameValue;
						Wing_end_L_Initial: CFrameValue;
						Foot_R_Original: CFrameValue;
						Spirit_Owl_19_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						Foot_L_Composited: CFrameValue;
						Head_Initial: CFrameValue;
						Foot_L_Initial: CFrameValue;
						Foot_R_Initial: CFrameValue;
						Wing_end_R_Composited: CFrameValue;
						Wing_end_L_Original: CFrameValue;
						Foot_end_L_Original: CFrameValue;
						Wing_R_Initial: CFrameValue;
						Wing_L_Initial: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Head_Original: CFrameValue;
						Wing_L_Original: CFrameValue;
						RootPart_Initial: CFrameValue;
						Foot_end_R_Composited: CFrameValue;
						Body_Original: CFrameValue;
						Wing_end_L_Composited: CFrameValue;
						Foot_end_R_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Wing_L_Composited: CFrameValue;
						Foot_end_L_Composited: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								Foot_L: Bone;
								Wing_R: Bone & {
									Wing_end_R: Bone;
								};
								Head: Bone;
								Foot_R: Bone;
								Wing_L: Bone & {
									Wing_end_L: Bone;
								};
							};
						};
					};
				};
				["06_mamuth"]: Model & {
					Body: MeshPart & {
						Rootpart: Bone & {
							["BLeg.L"]: Bone;
							["FLeg.R"]: Bone;
							["FLeg.L"]: Bone;
							["BLeg.R"]: Bone;
							Body: Bone & {
								Head: Bone & {
									tronk: Bone & {
										["tronk.001"]: Bone & {
											["tronk.002"]: Bone & {
												["tronk.003"]: Bone;
											};
										};
									};
								};
								tail: Bone & {
									["tail.001"]: Bone & {
										["tail.002"]: Bone & {
											["tail.003"]: Bone & {
												["tail.004"]: Bone & {
													["tail.005"]: Bone & {
														["tail.006"]: Bone;
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
				["11_scorpion"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Claws_Lower_R_Composited: CFrameValue;
						Claws_Lower_L_Initial: CFrameValue;
						Tail_01_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Scorpion_11_Initial: CFrameValue;
						Claws_R_Composited: CFrameValue;
						Foot_01_L_Original: CFrameValue;
						Tail_03_Initial: CFrameValue;
						Claws_L_Original: CFrameValue;
						Foot_02_R_Composited: CFrameValue;
						Foot_02_L_Composited: CFrameValue;
						Claws_R_Initial: CFrameValue;
						Head_Initial: CFrameValue;
						Tail_01_Composited: CFrameValue;
						Sting_Original: CFrameValue;
						Foot_end_03_L_Initial: CFrameValue;
						Claws_Lower_L_Original: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Scorpion_11_Original: CFrameValue;
						Foot_end_01_L_Original: CFrameValue;
						Foot_03_R_Composited: CFrameValue;
						Foot_end_03_L_Original: CFrameValue;
						Foot_01_R_Initial: CFrameValue;
						Body_Original: CFrameValue;
						Sting_Composited: CFrameValue;
						Foot_03_L_Original: CFrameValue;
						Foot_end_02_R_Initial: CFrameValue;
						Claws_L_Initial: CFrameValue;
						Claws_Lower_R_Original: CFrameValue;
						Claws_Lower_L_Composited: CFrameValue;
						Foot_end_02_L_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						Foot_end_03_L_Composited: CFrameValue;
						Foot_02_R_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						Foot_end_03_R_Initial: CFrameValue;
						Foot_03_L_Initial: CFrameValue;
						Foot_03_L_Composited: CFrameValue;
						Foot_02_L_Original: CFrameValue;
						Foot_end_02_L_Initial: CFrameValue;
						Foot_end_01_R_Initial: CFrameValue;
						Foot_03_R_Original: CFrameValue;
						Foot_end_01_R_Composited: CFrameValue;
						Foot_02_R_Initial: CFrameValue;
						Foot_end_02_L_Composited: CFrameValue;
						Foot_01_R_Composited: CFrameValue;
						Claws_R_Original: CFrameValue;
						RootPart_Initial: CFrameValue;
						Foot_end_02_R_Original: CFrameValue;
						Foot_02_L_Initial: CFrameValue;
						Tail_03_Original: CFrameValue;
						Foot_end_03_R_Original: CFrameValue;
						Foot_end_03_R_Composited: CFrameValue;
						Foot_end_01_L_Initial: CFrameValue;
						Foot_01_R_Original: CFrameValue;
						Tail_03_Composited: CFrameValue;
						Body_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						Foot_end_01_L_Composited: CFrameValue;
						Foot_01_L_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						Foot_01_L_Composited: CFrameValue;
						Claws_Lower_R_Initial: CFrameValue;
						Claws_L_Composited: CFrameValue;
						Foot_end_01_R_Original: CFrameValue;
						Foot_03_R_Initial: CFrameValue;
						Sting_Initial: CFrameValue;
						Scorpion_11_Composited: CFrameValue;
						Foot_end_02_R_Composited: CFrameValue;
						Tail_02_Original: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								Claws_L: Bone & {
									Claws_Lower_L: Bone;
								};
								Foot_03_L: Bone & {
									Foot_end_03_L: Bone;
								};
								Tail_01: Bone & {
									Tail_02: Bone & {
										Tail_03: Bone & {
											Sting: Bone;
										};
									};
								};
								Foot_02_R: Bone & {
									Foot_end_02_R: Bone;
								};
								Foot_01_L: Bone & {
									Foot_end_01_L: Bone;
								};
								Foot_03_R: Bone & {
									Foot_end_03_R: Bone;
								};
								Foot_01_R: Bone & {
									Foot_end_01_R: Bone;
								};
								Foot_02_L: Bone & {
									Foot_end_02_L: Bone;
								};
								Claws_R: Bone & {
									Claws_Lower_R: Bone;
								};
								Head: Bone;
							};
						};
					};
				};
				["20_spirit_wolf"]: Model & {
					AnimationController: AnimationController;
					AnimSaves: Model & {
						idle: KeyframeSequence;
						jump: KeyframeSequence;
					};
					InitialPoses: Folder & {
						Head_Original: CFrameValue;
						Tail_07_Composited: CFrameValue;
						Tail_06_Composited: CFrameValue;
						BFoot_end_R_Composited: CFrameValue;
						Body_Original: CFrameValue;
						Tail_01_Original: CFrameValue;
						RootPart_Original: CFrameValue;
						Tail_05_Composited: CFrameValue;
						Body_Composited: CFrameValue;
						Tail_02_Composited: CFrameValue;
						FFoot_L_Original: CFrameValue;
						Tail_04_Original: CFrameValue;
						BFoot_end_L_Original: CFrameValue;
						Tail_01_Initial: CFrameValue;
						FFoot_end_L_Original: CFrameValue;
						Spirit_Wolf_20_Initial: CFrameValue;
						Tail_03_Initial: CFrameValue;
						Tail_05_Original: CFrameValue;
						Spirit_Wolf_20_Composited: CFrameValue;
						BFoot_L_Initial: CFrameValue;
						BFoot_L_Original: CFrameValue;
						RootPart_Composited: CFrameValue;
						BFoot_L_Composited: CFrameValue;
						FFoot_R_Original: CFrameValue;
						Tail_04_Composited: CFrameValue;
						Tail_04_Initial: CFrameValue;
						Tail_06_Original: CFrameValue;
						FFoot_end_R_Original: CFrameValue;
						FFoot_L_Initial: CFrameValue;
						Tail_06_Initial: CFrameValue;
						Tail_07_Initial: CFrameValue;
						FFoot_L_Composited: CFrameValue;
						Tail_02_Original: CFrameValue;
						Tail_01_Composited: CFrameValue;
						RootPart_Initial: CFrameValue;
						Head_Initial: CFrameValue;
						BFoot_end_R_Original: CFrameValue;
						Tail_03_Original: CFrameValue;
						Tail_07_Original: CFrameValue;
						Spirit_Wolf_20_Original: CFrameValue;
						BFoot_R_Initial: CFrameValue;
						FFoot_R_Composited: CFrameValue;
						Tail_03_Composited: CFrameValue;
						BFoot_R_Original: CFrameValue;
						BFoot_R_Composited: CFrameValue;
						Head_Composited: CFrameValue;
						Body_Initial: CFrameValue;
						Tail_02_Initial: CFrameValue;
						FFoot_end_R_Composited: CFrameValue;
						FFoot_end_L_Composited: CFrameValue;
						FFoot_end_R_Initial: CFrameValue;
						FFoot_R_Initial: CFrameValue;
						FFoot_end_L_Initial: CFrameValue;
						BFoot_end_L_Composited: CFrameValue;
						BFoot_end_R_Initial: CFrameValue;
						Tail_05_Initial: CFrameValue;
						BFoot_end_L_Initial: CFrameValue;
					};
					Body: MeshPart & {
						RootPart: Bone & {
							Body: Bone & {
								BFoot_R: Bone;
								BFoot_L: Bone;
								Head: Bone;
								FFoot_R: Bone;
								FFoot_L: Bone;
								Tail_01: Bone & {
									Tail_02: Bone & {
										Tail_03: Bone & {
											Tail_04: Bone & {
												Tail_05: Bone & {
													Tail_06: Bone;
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
		vfx: Folder & {
			LeafDropsTree: Model & {
				leafDrops: Part & {
					ParticleEmitter: ParticleEmitter;
				};
			};
			VFX: Folder & {
				["3DStar"]: MeshPart;
				Shockwaves: MeshPart;
				Slash_Skill1: MeshPart;
				Explosion2: MeshPart;
				FancySlashLight: Part & {
					Weld: Weld;
					Decal2: Decal;
					Mesh: SpecialMesh;
					Decal1: Decal;
				};
				["Meshes/EyeRing"]: MeshPart;
				CircleShockwave: MeshPart & {
					Weld: Weld;
				};
				["Meshes/Shockwave 1"]: MeshPart;
				["Quake ball"]: Part & {
					Part: Part;
				};
				Effect_Skill1: UnionOperation;
				FancyBall: Part;
				["Meshes/newWave"]: MeshPart;
				["slash effect"]: MeshPart;
				Spring: MeshPart;
				DecalShockwave: MeshPart;
				Leaf: MeshPart;
				RenderMesh: MeshPart & {
					Dialog: Dialog & {
						DialogChoice: DialogChoice;
					};
				};
				Ring: MeshPart;
				Air: MeshPart;
				FancySlash: Part & {
					Weld: Weld;
					Decal2: Decal;
					Mesh: SpecialMesh;
					Decal1: Decal;
				};
				LightWind: MeshPart;
				GlitchBall: MeshPart;
				GravityBallShockwave: MeshPart & {
					Weld: Weld;
					Config: Folder & {
						Y: NumberValue;
						X: NumberValue;
						Z: NumberValue;
						Duration: IntValue;
						QG: BoolValue;
					};
				};
				["Meshes/spikeyball"]: MeshPart;
				["10smash"]: MeshPart;
				WindB: MeshPart;
				Tornado: MeshPart;
				Part: Part & {
					Mesh: SpecialMesh;
				};
				InvertedSpike: MeshPart;
				Flash: MeshPart;
				Glitch: MeshPart;
				FancySphereLight: MeshPart;
				["Meshes/new Wind"]: MeshPart;
				GroundSpikes: MeshPart;
				SwirlShockwaveFire: MeshPart;
				Whirl: MeshPart;
				SwirlWind: MeshPart;
				["RenderMesh (1)"]: MeshPart;
				["Meshes/WindMesh2"]: MeshPart;
				SemiShock: MeshPart;
				["6smash"]: MeshPart;
				["8smash"]: MeshPart;
				["Blue Explosion"]: Model & {
					["Meshes/EXPLODE low_Cube.002"]: MeshPart;
					["Meshes/EXPLODE low_Cube.003"]: MeshPart;
					["Meshes/EXPLODE low_Cube"]: MeshPart;
					["Meshes/EXPLODE low_Cube.001"]: MeshPart;
				};
				FancySphere: MeshPart;
				["Meshes/shockwave"]: MeshPart;
				InwardShockwave: MeshPart;
				["Meshes/WindMesh1"]: MeshPart;
				G: MeshPart & {
					WeldConstraint: WeldConstraint;
				};
				["Red Explosion"]: Model & {
					["Meshes/EXPLODE low_Cube.002"]: MeshPart;
					["Meshes/EXPLODE low_Cube.003"]: MeshPart;
					["Meshes/EXPLODE low_Cube"]: MeshPart;
					["Meshes/EXPLODE low_Cube.001"]: MeshPart;
				};
				FireBallB: MeshPart;
				Ball: Model;
				ThunderSparkB: MeshPart;
				ThunderSpark: MeshPart;
				Fire: MeshPart;
				Swirl: MeshPart;
				["Meshes/Wave"]: MeshPart;
				ExplosionB: MeshPart;
				Explosion1: MeshPart;
				FireBall: MeshPart;
				["ultra high res sphere"]: MeshPart;
				Vento2: MeshPart;
				GlitchWind: MeshPart;
				Wave3: MeshPart;
				GlitchBallB: MeshPart;
				skill8: Model & {
					Pri: Part;
				};
				["Meshes/WindMesh3"]: MeshPart;
				RoughShockwaveElectricity: MeshPart;
				WindSphere: MeshPart;
				Thunder: MeshPart;
				["Meshes/Beam"]: MeshPart;
				Whirl2: MeshPart;
			};
			["Axoie's Auras and vfxs!"]: Folder & {
				["Main VFXs"]: Folder & {
					Lines: Part & {
						Line2: ParticleEmitter;
						Line1: ParticleEmitter;
					};
					["Beam orb"]: Part & {
						Dust: ParticleEmitter;
						PointLight: PointLight;
						lightning: ParticleEmitter;
						Crescents: ParticleEmitter;
					};
					Orb: Part & {
						Attachment: Attachment & {
							ParticleEmitter: ParticleEmitter;
							["6"]: ParticleEmitter;
						};
					};
					Part: Part & {
						Attachment: Attachment & {
							Flames1: ParticleEmitter;
							ParticleEmitter: ParticleEmitter;
							Line2: ParticleEmitter;
							Line1: ParticleEmitter;
							Dot1: ParticleEmitter;
							Dot2: ParticleEmitter;
							Star1: ParticleEmitter;
							Light: PointLight;
							Dot3: ParticleEmitter;
						};
					};
					fire: Part & {
						a: Attachment & {
							fire_main: ParticleEmitter;
						};
						PointLight: PointLight;
						floor: Attachment & {
							glow2: ParticleEmitter;
							spec1: ParticleEmitter;
							core: ParticleEmitter;
							glow: ParticleEmitter;
							Realistic_Contrast: ParticleEmitter;
							fire_glow: ParticleEmitter;
							spec2_dark: ParticleEmitter;
							smoke: ParticleEmitter;
							spec2: ParticleEmitter;
						};
						random_heat: ParticleEmitter;
					};
					VFX: Model;
					Red: Part & {
						BA2: Attachment;
						HRPW: Weld;
						BA1: Attachment & {
							Dust: ParticleEmitter;
							B1: Beam;
							B2: Beam;
							B3: Beam;
						};
						BA3: Attachment;
						Summon: Attachment & {
							blackfire2: ParticleEmitter;
						};
						BA4: Attachment;
						A2: Attachment & {
							Spawn: ParticleEmitter;
						};
						A1: Attachment & {
							Bloom3: ParticleEmitter;
							Bloom4: ParticleEmitter;
							B1: Beam;
							Exp1: ParticleEmitter;
							C1: ParticleEmitter;
							Bloom: ParticleEmitter;
							Bloom2: ParticleEmitter;
							Shape: ParticleEmitter;
							C2: ParticleEmitter;
						};
						Light: PointLight;
					};
				};
				["Main Auras"]: Folder & {
					A: Part & {
						core: Attachment & {
							bottomsmoke: ParticleEmitter;
							upsmoke: ParticleEmitter;
							spreadparticle: ParticleEmitter;
							ring2: ParticleEmitter;
							aura: ParticleEmitter;
							down: ParticleEmitter;
							fog: ParticleEmitter;
							ring: ParticleEmitter;
							up: ParticleEmitter;
						};
						PointLight: PointLight;
						["Poison_Attachment1(*)"]: Attachment & {
							backdrop: ParticleEmitter;
							["poison specks"]: ParticleEmitter;
						};
						["Poison_Attachment2(*)"]: Attachment;
					};
					Wind: Part & {
						Wind: Attachment & {
							ParticleEmitter: ParticleEmitter;
						};
					};
					["Aura Outline"]: Part & {
						Dummy: Model & {
							["Left Leg"]: Part & {
								ParticleEmitter: ParticleEmitter;
							};
							Humanoid: Humanoid;
							["Right Leg"]: Part & {
								ParticleEmitter: ParticleEmitter;
							};
							["Left Arm"]: Part & {
								ParticleEmitter: ParticleEmitter;
							};
							Head: Part & {
								Face: Decal;
								Mesh: SpecialMesh;
								ParticleEmitter: ParticleEmitter;
							};
							Torso: Part & {
								["Left Shoulder"]: Motor6D;
								["Right Shoulder"]: Motor6D;
								ParticleEmitter: ParticleEmitter;
								Neck: Motor6D;
								["Right Hip"]: Motor6D;
								["Left Hip"]: Motor6D;
							};
							HumanoidRootPart: Part & {
								["Root Hip"]: Motor6D;
							};
							["Right Arm"]: Part & {
								ParticleEmitter: ParticleEmitter;
							};
						};
						Arrow: Model;
						ParticleEmitter: ParticleEmitter;
					};
					Orb: Part & {
						["Orb outline"]: Attachment & {
							ParticleEmitter: ParticleEmitter;
						};
					};
				};
				Baseplate: Folder;
			};
		};
		Active: Folder;
	};
	Game: Folder & {
		Zones: Model & {
			["53"]: Part;
			["43"]: Part;
			["73"]: Part;
			["63"]: Part;
			["47"]: Part;
			["37"]: Part;
			["67"]: Part;
			["57"]: Part;
			["27"]: Part;
			["17"]: Part;
			["13"]: Part;
			["33"]: Part;
			["23"]: Part;
			["42"]: Part;
			["52"]: Part;
			["62"]: Part;
			["72"]: Part;
			["36"]: Part;
			["46"]: Part;
			["56"]: Part;
			["66"]: Part;
			extra65: Part;
			["80"]: Part;
			["95"]: Part;
			["94"]: Part;
			["93"]: Part;
			["16"]: Part;
			["26"]: Part;
			["92"]: Part;
			["12"]: Part;
			["22"]: Part;
			["32"]: Part;
			["71"]: Part;
			["61"]: Part;
			["51"]: Part;
			["41"]: Part;
			["65"]: Part;
			["55"]: Part;
			["45"]: Part;
			["35"]: Part;
			["59"]: Part;
			["49"]: Part;
			["39"]: Part;
			["29"]: Part;
			["91"]: Part;
			["89"]: Part;
			["79"]: Part;
			["69"]: Part;
			["1"]: Part;
			["90"]: Part;
			["3"]: Part;
			["2"]: Part;
			["19"]: Part;
			["4"]: Part;
			["7"]: Part;
			["6"]: Part;
			["25"]: Part;
			["8"]: Part;
			["85"]: Part;
			["87"]: Part;
			["31"]: Part;
			["21"]: Part;
			["11"]: Part;
			["86"]: Part;
			["60"]: Part;
			["70"]: Part;
			["40"]: Part;
			["50"]: Part;
			["54"]: Part;
			["64"]: Part;
			["34"]: Part;
			["44"]: Part;
			["48"]: Part;
			["58"]: Part;
			["28"]: Part;
			["38"]: Part;
			["88"]: Part;
			["84"]: Part;
			["68"]: Part;
			["78"]: Part;
			["83"]: Part;
			["82"]: Part;
			["81"]: Part;
			["76"]: Part;
			["77"]: Part;
			["18"]: Part;
			["74"]: Part;
			["75"]: Part;
			["14"]: Part;
			["24"]: Part;
			["5"]: Part;
			["9"]: Part;
			["20"]: Part;
			["30"]: Part;
			["15"]: Part;
			["10"]: Part;
		};
		MapItems: Model & {
			TntDispencer: MeshPart;
			gift_potion: Part & {
				Weld: Weld;
				HatAttachment: Attachment;
				Mesh: SpecialMesh;
				OriginalSize: Vector3Value;
			};
			Potions2: MeshPart;
			gift_boosts: Part & {
				Weld: Weld;
				HatAttachment: Attachment;
				Mesh: SpecialMesh;
				OriginalSize: Vector3Value;
			};
			JarDispencer: MeshPart;
			ItemsDispencer: MeshPart;
			BoostDispencer: MeshPart;
			Potions1: MeshPart;
			Potions3: MeshPart;
		};
		SpawnTest: SpawnLocation;
		Estructures: Folder & {
			OpenChest: Model & {
				Bones2: MeshPart;
				ChestOpen: MeshPart;
				Part: Part;
				Bones1: MeshPart;
				Bones4: MeshPart;
				Bones: MeshPart;
				Bones3: MeshPart;
			};
			EquipmentShop: Model & {
				Part: Part;
				EquipmentShop: Model & {
					["Cube.008Pawnshop.001"]: MeshPart;
					Text: MeshPart;
					["Plane.002Pawnshop.001"]: MeshPart;
					["Cube.003"]: MeshPart;
					["Cube.006"]: MeshPart;
					Cube: MeshPart;
					["Cube.001"]: MeshPart;
					["Cube.004"]: MeshPart;
					["Cube.005"]: MeshPart;
					["Cube.002"]: MeshPart;
				};
			};
			PawnShop: Model & {
				["Cube.003Pawnshop"]: MeshPart;
				["Plane.002Pawnshop"]: MeshPart;
				Part: Part;
				["Cube.006Pawnshop"]: MeshPart;
				Plane: MeshPart;
				["Cube.007Pawnshop"]: MeshPart;
				CubePawnshop: MeshPart;
				PlanePawnshop: MeshPart;
				["Cube.009Pawnshop"]: MeshPart;
				["Cube.002Pawnshop"]: MeshPart;
				["Cube.005Pawnshop"]: MeshPart;
				["Cube.008Pawnshop"]: MeshPart;
				["Cube.004Pawnshop"]: MeshPart;
			};
		};
		SpawnLocation: SpawnLocation;
		hints: Folder & {
			many_areas: Part;
			click_hint: Part;
			keep_going: Part;
			pets_help: Part;
		};
		Eggs: Folder & {
			Campfire: Model & {
				Part: Part & {
					PointLight: PointLight;
				};
				["Cylinder.003"]: MeshPart;
				Particle: Part & {
					ParticleEmitter: ParticleEmitter;
				};
				Hitbox: Part;
			};
			Plane: MeshPart & {
				a18: Attachment;
				a15: Attachment;
				a9: Attachment;
				a11: Attachment;
				a21: Attachment;
				a4: Attachment;
				a5: Attachment;
				a6: Attachment;
				a7: Attachment;
				a10: Attachment;
				a2: Attachment;
				a1: Attachment;
				a20: Attachment;
				a17: Attachment;
				a23: Attachment;
				a25: Attachment;
				a13: Attachment;
				a24: Attachment;
				a8: Attachment;
				a16: Attachment;
				a19: Attachment;
				a14: Attachment;
				a22: Attachment;
				a12: Attachment;
				a3: Attachment;
			};
			eggs: Model & {
				["Fosil1.001"]: MeshPart;
				["Fosil1.002"]: MeshPart;
			};
		};
		Paths: Folder;
		Markers: Model & {
			m32: Part;
			m75: Part;
			m16: Part;
			m56: Part;
			m79: Part;
			m31: Part;
			m72: Part;
			m57: Part;
			m10: Part;
			m18: Part;
			m58: Part;
			m90: Part;
			m34: Part;
			m23: Part;
			m1: Part;
			m74: Part;
			m50: Part;
			m35: Part;
			m85: Part;
			m41: Part;
			m66: Part;
			m26: Part;
			m89: Part;
			m49: Part;
			m42: Part;
			m67: Part;
			m8: Part;
			m20: Part;
			m73: Part;
			m28: Part;
			m77: Part;
			m33: Part;
			m4: Part;
			m84: Part;
			m60: Part;
			m45: Part;
			m12: Part;
			m51: Part;
			m36: Part;
			m11: Part;
			m82: Part;
			m93: Part;
			m59: Part;
			m15: Part;
			m76: Part;
			m52: Part;
			m78: Part;
			m92: Part;
			m30: Part;
			m91: Part;
			m14: Part;
			m54: Part;
			m87: Part;
			m38: Part;
			m3: Part;
			m9: Part;
			m86: Part;
			m83: Part;
			m55: Part;
			m19: Part;
			m94: Part;
			m7: Part;
			m81: Part;
			m22: Part;
			m5: Part;
			m71: Part;
			m46: Part;
			m70: Part;
			m68: Part;
			m61: Part;
			m69: Part;
			m43: Part;
			m21: Part;
			m64: Part;
			m25: Part;
			m47: Part;
			m63: Part;
			m29: Part;
			m62: Part;
			m37: Part;
			m39: Part;
			m88: Part;
			m48: Part;
			m24: Part;
			m53: Part;
			m80: Part;
			m27: Part;
			m2: Part;
			m44: Part;
			m13: Part;
			m40: Part;
			m65: Part;
			m6: Part;
			m17: Part;
		};
		Biomes: Folder & {
			Jungle: Folder & {
				Area33: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder;
							Trees: Folder;
						};
						Mountains: Folder;
					};
				};
				JungleFloor: Part;
				Area34: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder;
							Trees: Folder;
						};
						Mountains: Folder;
					};
				};
				Area31: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder;
							Trees: Folder;
						};
						Mountains: Folder;
					};
				};
				Area35: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder;
							Trees: Folder;
						};
						Mountains: Folder;
					};
				};
				Area32: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder;
							Trees: Folder;
						};
						Mountains: Folder;
					};
				};
			};
			Flower2: Folder & {
				Area41: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Trees: Folder;
							Plants: Folder;
							Flowers: Folder;
						};
						Mountains: Folder & {
							FlowerMountain_A: MeshPart;
							FlowerMountain_D: MeshPart;
						};
					};
				};
				Area42: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Trees: Folder;
							Plants: Folder;
							Flowers: Folder;
						};
						Mountains: Folder & {
							FlowerMountain_D: MeshPart;
						};
					};
				};
				Area45: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Trees: Folder;
							Plants: Folder;
							Flowers: Folder;
						};
						Mountains: Folder;
					};
				};
				Area43: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Trees: Folder;
							Plants: Folder;
							Flowers: Folder;
						};
						Mountains: Folder;
					};
				};
				Area44: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Trees: Folder;
							Plants: Folder;
							Flowers: Folder;
						};
						Mountains: Folder & {
							FlowerMountain_A: MeshPart;
							FlowerMountain_D: MeshPart;
						};
					};
				};
			};
			Desert: Folder & {
				Area69: Folder & {
					Decoration: Folder & {
						AssetsGroup: Folder;
						Dunes: Folder & {
							DuneC: MeshPart;
						};
					};
				};
				Area70: Folder & {
					Decoration: Folder & {
						AssetsGroup: Folder;
						Dunes: Folder & {
							DuneC: MeshPart;
						};
					};
				};
				Estructure: Folder;
				Area68: Folder & {
					Decoration: Folder & {
						AssetsGroup: Folder;
						Dunes: Folder;
					};
				};
				Area66: Folder & {
					Decoration: Folder & {
						AssetsGroup: Folder & {
							DesertAssetsGroupC: Model & {
								["Plant-A"]: MeshPart;
								Cactus: MeshPart;
								["Rock-A3"]: MeshPart;
							};
						};
					};
				};
				Area67: Folder & {
					Decoration: Folder & {
						AssetsGroup: Folder;
						Dunes: Folder & {
							DuneA: MeshPart;
						};
					};
				};
			};
			Canyon: Folder & {
				Area1: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder;
							Cactus: Folder;
							Rocks: Folder & {
								["Rock-A1"]: Folder;
								["Rock-A2"]: Folder;
								["Rock-A3"]: Folder;
							};
						};
						Mountains: Folder & {
							DesertMountainGroup: Model;
						};
						FossilProps: Folder;
						["Fosil1.001"]: MeshPart;
					};
				};
				Area3: Folder & {
					Estructures: Folder;
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder;
							Cactus: Folder;
							Rocks: Folder & {
								["Rocks-A2"]: Folder;
								["Rocks-A1"]: Folder;
								["Rocks-A3"]: Folder;
							};
						};
						Mountains: Folder;
						FossilProps: Folder;
					};
				};
				Area2: Folder & {
					Estructures: Folder;
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder;
							Cactus: Folder;
							Rocks: Folder & {
								["Rocks-A2"]: Folder;
								["Rocks-A1"]: Folder;
								["Rocks-A3"]: Folder;
							};
						};
						Mountains: Folder;
						FossilProps: Folder;
					};
				};
				ExteriorMountain: Model;
				Area5: Folder & {
					Estructures: Folder;
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder;
							Cactus: Folder;
							Rocks: Folder & {
								["Rocks-A2"]: Folder;
								["Rocks-A1"]: Folder;
								["Rocks-A3"]: Folder;
							};
						};
						Mountains: Folder;
						FossilProps: Folder;
					};
				};
				Area4: Folder & {
					Estructures: Folder;
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder;
							Cactus: Folder;
							Rocks: Folder & {
								["Rocks-A2"]: Folder;
								["Rocks-A1"]: Folder;
								["Rocks-A3"]: Folder;
							};
						};
						Mountains: Folder;
						FossilProps: Folder;
					};
				};
			};
			Niagara: Folder & {
				Area16: Folder & {
					Estructure: Folder;
					Decoration: Folder & {
						Mountains: Folder;
						Rocks: Folder;
					};
				};
				Area18: Folder & {
					Estructure: Folder;
					Decoration: Folder & {
						Mountains: Folder;
						Rocks: Folder;
					};
				};
				Area19: Folder & {
					Estructure: Folder;
					Decoration: Folder & {
						Mountains: Folder;
						Rocks: Folder;
					};
				};
				NiagaraMountainA: Model & {
					WaterFalls: Model;
					Water: Model & {
						WatterColor: Part & {
							Texture: Texture;
						};
						WatterEffect: MeshPart & {
							SurfaceAppearance: SurfaceAppearance;
						};
					};
				};
				Water: Model & {
					WatterColor: Part & {
						Texture: Texture;
					};
					WatterEffect: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
					};
				};
				WaterFlow: Folder;
				Area20: Folder & {
					Estructure: Folder;
					Decoration: Folder & {
						Mountains: Folder;
						Rocks: Folder;
					};
				};
				Area17: Folder & {
					Estructure: Folder;
					Decoration: Folder & {
						Mountains: Folder;
						Rocks: Folder;
					};
				};
				NiagaraMountainB: Model & {
					Water: Model & {
						WatterColor: Part & {
							Texture: Texture;
						};
						WatterEffect: MeshPart & {
							SurfaceAppearance: SurfaceAppearance;
						};
					};
					WaterFalls: Model;
				};
			};
			Mountains: Folder & {
				Area15: Folder & {
					Estructure: Folder;
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder;
							Trees: Folder;
						};
						Mountains: Folder & {
							MountainA: MeshPart;
							MountainB: MeshPart;
							MountainC: MeshPart;
						};
						Rocks: Folder & {
							RocckA1: MeshPart;
						};
					};
				};
				Area14: Folder & {
					Estructure: Folder;
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder;
							Trees: Folder;
						};
						Mountains: Folder & {
							MountainA: MeshPart;
							MountainB: MeshPart;
						};
						Rocks: Folder;
					};
				};
				Area13: Folder & {
					Estructure: Folder;
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder;
							Trees: Folder;
						};
						Mountains: Folder & {
							MountainA: MeshPart;
						};
						Rocks: Folder & {
							RocckA1: MeshPart;
						};
					};
				};
				Area12: Folder & {
					Estructure: Folder;
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder;
							Trees: Folder;
						};
						Mountains: Folder & {
							MountainC: MeshPart;
						};
						Rocks: Folder & {
							RocckA2: MeshPart;
						};
					};
				};
				Area11: Folder & {
					Estructure: Folder;
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder;
							Trees: Folder;
						};
						Mountains: Folder & {
							MountainC: MeshPart;
						};
						Rocks: Folder & {
							RocckA1: MeshPart;
						};
					};
				};
			};
			Coral: Folder & {
				Estructure: Folder & {
					Water: Model & {
						WatterEffect: MeshPart & {
							SurfaceAppearance: SurfaceAppearance;
						};
					};
				};
				Area63: Folder & {
					Decoration: Folder & {
						Mountains: Folder & {
							CoralMountainA: MeshPart;
							CoralMountainC: MeshPart;
						};
						Corals: Folder;
					};
				};
				Area65: Folder & {
					Decoration: Folder & {
						Mountains: Folder & {
							CoralMountainB: MeshPart;
						};
						Corals: Folder;
					};
				};
				Area61: Folder & {
					Decoration: Folder & {
						Mountains: Folder & {
							CoralMountainA: MeshPart;
							CoralMountainB: MeshPart;
						};
						Corals: Folder;
					};
				};
				Area64: Folder & {
					Decoration: Folder & {
						Mountains: Folder & {
							CoralMountainB: MeshPart;
						};
						Corals: Folder;
					};
				};
				Area62: Folder & {
					Decoration: Folder & {
						Mountains: Folder & {
							CoralMountainA: MeshPart;
						};
						Corals: Folder;
					};
				};
			};
			Amazonas: Folder & {
				Area46: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder;
							Trees: Folder;
						};
						Mountains: Folder;
					};
				};
				Estructure: Folder & {
					Water: Model & {
						Part: Part;
						WatterEffect: MeshPart & {
							SurfaceAppearance: SurfaceAppearance;
						};
						WatterColor: Part & {
							Texture: Texture;
						};
					};
				};
				Area50: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder & {
								JunglePlantA: Model;
								JunglePlantB: Model;
							};
							Trees: Folder;
						};
						Mountains: Folder;
					};
				};
				Area48: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder;
							Trees: Folder;
						};
						Mountains: Folder;
					};
				};
				Area49: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder;
							Trees: Folder;
						};
						Mountains: Folder;
					};
				};
				Area47: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder;
							Trees: Folder;
						};
						Mountains: Folder;
					};
				};
			};
			Bamboo2: Folder & {
				Area51: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Bamboo: Folder;
						};
						Mountains: Folder;
						BambooLamps: Folder;
					};
				};
				Area54: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Bamboo: Folder;
						};
						Mountains: Folder;
						BambooLamps: Folder;
					};
				};
				Area53: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Bamboo: Folder;
						};
						Mountains: Folder & {
							["Mountain_01.038"]: MeshPart;
						};
						BambooLamps: Folder;
					};
				};
				Area55: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Bamboo: Folder;
						};
						Mountains: Folder & {
							["Mountain_01.035"]: MeshPart;
						};
					};
				};
				Area52: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Bamboo: Folder;
						};
						Mountains: Folder & {
							["Mountain_01.038"]: MeshPart;
						};
						BambooLamps: Folder;
					};
				};
			};
			Beach: Folder & {
				Decoration: Folder & {
					Building: Folder & {
						["Palm Pot"]: Folder;
						Edifices: Folder & {
							["Building.002"]: MeshPart;
							Model: Model & {
								Building: MeshPart;
								["Building.003"]: MeshPart;
							};
						};
						Road: Model;
					};
					Mountains: Folder;
					Water: Folder;
					Vegetation: Folder;
				};
			};
			Cave: Folder & {
				Area57: Folder & {
					Decoration: Folder & {
						["Stalagmites/Stalactites"]: Folder & {
							Stalactites: Model;
							Stalagmites: Model;
						};
						Crystals: Folder & {
							CrystalsCaveB: Model;
							CrystalsCaveA: Model;
							CrystalsCaveC: Model;
						};
					};
				};
				Area59: Folder & {
					Decoration: Folder & {
						["Stalagmites/Stalactites"]: Folder & {
							Stalactites: Model;
							Stalagmites: Model;
						};
						Crystals: Folder & {
							CrystalsCaveB: Model;
							CrystalsCaveA: Model;
							CrystalsCaveC: Model;
						};
					};
				};
				Area56: Folder & {
					Decoration: Folder & {
						["Stalagmites/Stalactites"]: Folder & {
							Stalagmites: Model;
							Stalactites: Model;
						};
						Crystals: Folder & {
							CrystalCavesC: Model;
							CrystalsCaveB: Model;
							CrystalsCaveA: Model;
						};
					};
				};
				Area58: Folder & {
					Decoration: Folder & {
						["Stalagmites/Stalactites"]: Folder & {
							Stalactites: Model;
							Stalagmites: Model;
						};
						Crystals: Folder & {
							CrystalsCaveB: Model;
							CrystalsCaveA: Model;
							CrystalsCaveC: Model;
						};
					};
				};
				Estructure: Folder & {
					FakeLights: Model;
				};
				Area60: Folder & {
					Decoration: Folder & {
						["Stalagmites/Stalactites"]: Folder & {
							Stalagmites: Model;
						};
						Crystals: Folder & {
							CrystalsCaveB: Model;
							CrystalsCaveA: Model;
							CrystalsCaveC: Model;
						};
					};
				};
			};
			Bamboo: Folder & {
				Area51: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Bamboo: Folder;
						};
						Mountains: Folder;
						BambooLamps: Folder;
					};
				};
				Area54: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Bamboo: Folder;
						};
						Mountains: Folder;
						BambooLamps: Folder;
					};
				};
				Area53: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Bamboo: Folder;
						};
						Mountains: Folder & {
							["Mountain_01.038"]: MeshPart;
						};
						BambooLamps: Folder;
					};
				};
				Area55: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Bamboo: Folder;
						};
						Mountains: Folder & {
							["Mountain_01.035"]: MeshPart;
						};
					};
				};
				Area52: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Bamboo: Folder;
						};
						Mountains: Folder & {
							["Mountain_01.038"]: MeshPart;
						};
						BambooLamps: Folder;
					};
				};
			};
			Flower: Folder & {
				Area41: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Trees: Folder;
							Plants: Folder;
							Flowers: Folder;
						};
						Mountains: Folder & {
							FlowerMountain_A: MeshPart;
							FlowerMountain_D: MeshPart;
						};
					};
				};
				Area42: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Trees: Folder;
							Plants: Folder;
							Flowers: Folder;
						};
						Mountains: Folder & {
							FlowerMountain_D: MeshPart;
						};
					};
				};
				Area45: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Trees: Folder;
							Plants: Folder;
							Flowers: Folder;
						};
						Mountains: Folder;
					};
				};
				Area43: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Trees: Folder;
							Plants: Folder;
							Flowers: Folder;
						};
						Mountains: Folder;
					};
				};
				Area44: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Trees: Folder;
							Plants: Folder;
							Flowers: Folder;
						};
						Mountains: Folder & {
							FlowerMountain_A: MeshPart;
							FlowerMountain_D: MeshPart;
						};
					};
				};
			};
			Taiga: Folder & {
				Area78: Folder & {
					Decoration: Folder & {
						Mountains: Folder & {
							["Mountain_01.032"]: MeshPart;
						};
						Trees: Folder;
						Trunks: Folder;
						Rocks: Folder;
					};
				};
				Area77: Folder & {
					Decoration: Folder & {
						Mountains: Folder;
						Trees: Folder;
						Trunks: Folder;
						Rocks: Folder & {
							Rock: Model;
						};
					};
				};
				Area80: Folder & {
					Decoration: Folder & {
						Mountains: Folder & {
							["Mountain_01.033"]: MeshPart;
						};
						Trees: Folder;
						Trunks: Folder;
						Rocks: Folder & {
							Rock: Model;
						};
					};
				};
				Area79: Folder & {
					Decoration: Folder & {
						Mountains: Folder & {
							["Mountain_01.032"]: MeshPart;
						};
						Trees: Folder;
						Trunks: Folder;
						Rocks: Folder & {
							Rock: MeshPart;
						};
					};
				};
				Area76: Folder & {
					Decoration: Folder & {
						Mountains: Folder & {
							["Mountain_01.032"]: MeshPart;
						};
						Trees: Folder;
						Trunks: Folder;
						Rocks: Folder & {
							Rock: MeshPart;
						};
					};
				};
			};
			Mojave: Folder & {
				Area9: Folder & {
					Estructure: Folder;
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder & {
								BushB: MeshPart;
								BushD: MeshPart;
							};
							Trees: Folder;
						};
						Mountains: Folder & {
							A: Folder;
							C: Folder & {
								["MojaveMountain-C"]: MeshPart;
							};
							B: Folder;
						};
						Rocks: Folder & {
							MojaveRockC: MeshPart;
						};
					};
				};
				Area6: Folder & {
					Estructure: Folder;
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder & {
								BushC: MeshPart;
								BushD: MeshPart;
							};
							Trees: Folder;
						};
						Mountains: Folder & {
							A: Folder;
							C: Folder;
							B: Folder;
						};
						Rocks: Folder & {
							MojaveRockC: MeshPart;
						};
					};
				};
				Estructure: Folder;
				Area10: Folder & {
					Estructure: Folder;
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder & {
								BushB: MeshPart;
								BushD: MeshPart;
							};
							Trees: Folder;
						};
						Mountains: Folder & {
							A: Folder;
							C: Folder & {
								["MojaveMountain-C"]: MeshPart;
							};
							B: Folder & {
								["MojaveMountain-D"]: MeshPart;
							};
						};
						Rocks: Folder & {
							MojaveRockC: MeshPart;
						};
					};
				};
				Area7: Folder & {
					Estructure: Folder;
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder & {
								BushB: MeshPart;
								BushD: MeshPart;
								BushA: MeshPart;
							};
							Trees: Folder;
						};
						Mountains: Folder & {
							A: Folder;
							C: Folder;
							B: Folder;
						};
						Rocks: Folder & {
							MojaveRockC: MeshPart;
						};
					};
				};
				Area8: Folder & {
					Estructure: Folder;
					Decoration: Folder & {
						Vegetation: Folder & {
							Plants: Folder & {
								BushA: MeshPart;
							};
							Trees: Folder;
						};
						Mountains: Folder & {
							A: Folder;
							C: Folder;
							B: Folder;
						};
						Rocks: Folder & {
							MojaveRockC: MeshPart;
						};
					};
				};
			};
			["Volcanic Caldera"]: Folder & {
				Estructure: Folder;
				Area85: Folder & {
					Decoration: Folder & {
						Mountains: Folder;
						Trees: Folder;
					};
				};
				Area83: Folder & {
					Decoration: Folder & {
						Mountains: Folder;
						Trees: Folder;
					};
				};
				Area84: Folder & {
					Decoration: Folder & {
						Mountains: Folder;
						Trees: Folder;
					};
				};
				Area82: Folder & {
					Volcano: Model & {
						Volcano: Model & {
							Lava: MeshPart;
							Volcano: MeshPart;
						};
						VolcanicTerrainA: MeshPart;
					};
					Decoration: Folder & {
						Mountains: Folder;
						Trees: Folder;
					};
				};
				Area81: Folder & {
					Decoration: Folder & {
						Trees: Folder;
						Mountains: Folder;
					};
				};
			};
			Volcano: Folder & {
				Area86: Folder & {
					Decoration: Folder & {
						Mountains: Folder;
						Trees: Folder;
					};
				};
				Area87: Folder & {
					Decoration: Folder & {
						Mountains: Folder;
						Trees: Folder;
					};
				};
				Area90: Folder & {
					Decoration: Folder & {
						Trees: Folder;
						Mountains: Folder;
					};
				};
				Area89: Folder & {
					Decoration: Folder & {
						Mountains: Folder;
						Trees: Folder;
					};
				};
				Area88: Folder & {
					Decoration: Folder & {
						Trees: Folder;
						Mountains: Folder;
					};
				};
				Estructure: Folder;
			};
			Oasis: Folder & {
				Estructure: Folder & {
					Water: Model & {
						Part: Part;
						WatterEffect: MeshPart & {
							SurfaceAppearance: SurfaceAppearance;
						};
						WatterColor: Part & {
							Texture: Texture;
						};
					};
				};
				Area72: Folder & {
					Decoration: Folder & {
						Palms: Folder;
						Plants: Folder;
						Rocks: Folder;
					};
				};
				Area73: Folder & {
					Decoration: Folder & {
						Palms: Folder;
						Plants: Folder;
						Rocks: Folder;
					};
				};
				Area71: Folder & {
					Decoration: Folder & {
						Palms: Folder;
						Plants: Folder;
						Rocks: Folder;
					};
				};
				Area75: Folder & {
					Decoration: Folder & {
						Palms: Folder;
						Plants: Folder;
						Rocks: Folder;
					};
				};
				Area74: Folder & {
					Decoration: Folder & {
						Palms: Folder;
						Plants: Folder;
						Rocks: Folder;
					};
				};
			};
			SnowMountains: Folder & {
				Area22: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Trunks: Folder;
							Trees: Folder;
						};
						Mountains: Folder & {
							SnowMountainD: MeshPart;
						};
						CampingHouse: Folder & {
							CampingHouse: MeshPart;
						};
						Rocks: Folder & {
							SnowRockC: MeshPart;
						};
					};
				};
				Area21: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Trunks: Folder;
							Trees: Folder;
						};
						Mountains: Folder;
						Rocks: Folder & {
							SnowRockC: MeshPart;
						};
					};
				};
				Area24: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Trunks: Folder;
							Trees: Folder;
						};
						Mountains: Folder & {
							SnowMountainD: MeshPart;
						};
						Rocks: Folder & {
							SnowRockB: MeshPart;
						};
					};
				};
				Area25: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Trunks: Folder;
							Trees: Folder;
						};
						Mountains: Folder & {
							SnowMountainA: MeshPart;
						};
						CampingHouse: Folder & {
							CampingHouse: MeshPart;
						};
						Rocks: Folder & {
							SnowRockA: MeshPart;
							SnowRockC: MeshPart;
							SnowRockB: MeshPart;
						};
					};
				};
				Area23: Folder & {
					Decoration: Folder & {
						Vegetation: Folder & {
							Trunks: Folder;
							Trees: Folder;
						};
						Mountains: Folder & {
							SnowMountainD: MeshPart;
						};
						Rocks: Folder & {
							SnowRockC: MeshPart;
						};
					};
				};
			};
			NorthPole: Folder & {
				Area27: Folder & {
					Decoration: Folder & {
						Mountains: Folder;
					};
				};
				Area26: Folder & {
					Decoration: Folder & {
						Mountains: Folder;
					};
				};
				Area29: Folder & {
					Decoration: Folder & {
						Mountains: Folder;
					};
				};
				Water: Model & {
					Part: Part;
					WatterEffect: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
					};
					WatterColor: Part & {
						Texture: Texture;
					};
				};
				Area28: Folder & {
					Decoration: Folder & {
						Mountains: Folder;
					};
				};
				Area30: Folder & {
					Decoration: Folder & {
						Mountains: Folder;
					};
				};
			};
		};
		other: Folder & {
			VolcanicRocks: Model;
			Assets: Model & {
				Taiga: Model & {
					["Mountain_01.033"]: MeshPart;
					["Mountain_01.034"]: MeshPart;
					["SnowTree.004"]: MeshPart;
					["SnowTree.005"]: MeshPart;
					["Mountain_01.032"]: MeshPart;
					["Mountain_01.031"]: MeshPart;
				};
				PinkCoral_A: Model;
				RedCoral_B: Model;
				Part: Part;
				CrystalCaveC: Model & {
					GlassEffect: MeshPart & {
						PointLight: PointLight;
					};
					CrystalCaveC: MeshPart;
				};
				volcano3: Model & {
					["Cylinder.020"]: MeshPart;
					["Cylinder.021"]: MeshPart;
					["Cylinder.019"]: MeshPart;
				};
				GroupCoralA: Model & {
					BlueCoral_B: Model;
					RocksA: MeshPart;
					PinkCoral_A: Model;
				};
				Water: Model & {
					Part: Part;
					WatterEffect: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
					};
					WatterColor: Part & {
						Texture: Texture;
					};
				};
				CaveModuleV1: Model & {
					["Cube.019"]: MeshPart;
					["Cube.018"]: MeshPart;
				};
				CoralGroupB: Model & {
					BlueCoral_A: Model;
					RedCoral_A: Model;
					YellowCoral_B: Model;
				};
				Coral: Model & {
					["Mountain_01.028"]: MeshPart;
					["Mountain_01.029"]: MeshPart;
					["Sphere.002"]: MeshPart;
					["Cylinder.015"]: MeshPart;
					["Sphere.001"]: MeshPart;
					Sphere: MeshPart;
					["Plane.012"]: MeshPart;
					["Cylinder.014"]: MeshPart;
					["Cylinder.012"]: MeshPart;
					["Cylinder.011"]: MeshPart;
					["Mountain_01.030"]: MeshPart;
					["Mountain_01.027"]: MeshPart;
				};
				Volcano: Model & {
					["Cube.022"]: MeshPart;
					["Cylinder.016"]: MeshPart;
					["Cylinder.018"]: MeshPart;
					["Cylinder.019"]: MeshPart;
					["Tree_01.004"]: MeshPart;
					["Cube.021"]: MeshPart;
					["Cylinder.017"]: MeshPart;
				};
				CoralGroupD: Model & {
					Sphere: MeshPart;
					RedCoral_B: Model;
					YellowCoral_A: Model;
				};
				OasisAssets: Model & {
					OasisPalmB: MeshPart;
					OasisPalmA: MeshPart;
					DuneC: MeshPart;
					DuneB: MeshPart;
					DuneA: MeshPart;
				};
				YellowCoral_A: Model;
				Seaweed: MeshPart;
				PinkCoral_B: Model;
				CaveModuleV2: Model & {
					CaveRoof: MeshPart;
				};
				BlueCoral_A: Model;
				CrystalCaveA: Model & {
					GlassEffect: MeshPart & {
						PointLight: PointLight;
					};
					CrystalCaveA: MeshPart;
				};
				GroupCoralC: Model & {
					PinkCoral_B: Model;
					Seaweed: MeshPart;
					RocksB: MeshPart;
				};
				YellowCoral_B: Model;
				CaveWall: MeshPart;
				Sphere: MeshPart;
				CrystalCaveB: Model & {
					GlassEffect: MeshPart & {
						PointLight: PointLight;
					};
					CrystalCaveB: MeshPart;
				};
				RedCoral_A: Model;
				swamp1: Model & {
					["Cube.021"]: MeshPart;
				};
				BlueCoral_B: Model;
			};
		};
		egg_marker: Part;
		shops: Model & {
			chest: Part;
			equip_shop: Part;
			pawn_shop: Part;
		};
		Barrier: Model;
	};
	Targets: Folder & {
		FossilProps: Folder & {
			CrateCloset: MeshPart;
			ChestCloset: MeshPart;
			OpenChest: Model & {
				Bones2: MeshPart;
				ChestOpen: MeshPart;
				Bones1: MeshPart;
				Bones4: MeshPart;
				Bones: MeshPart;
				Bones3: MeshPart;
			};
			CrateOpen: Model & {
				CrateOpen: MeshPart;
				["Bones.001"]: MeshPart;
			};
			Gift: Model & {
				gift: MeshPart;
				["Bones.001"]: MeshPart;
			};
		};
		Drops: Folder;
		Extra: Folder;
		Fossils: Folder;
		Ignore: Folder & {
			Drops: Folder;
		};
	};
	Effects: Folder & {
		waterfall_sounds: Folder;
		ambient: Folder & {
			b10_waterforest: Part & {
				Sound: Sound;
			};
			b2_bambo: Part & {
				Sound: Sound;
			};
			b1_cayons: Part & {
				Sound: Sound;
			};
			b14_sand: Part & {
				Sound: Sound;
			};
			b5_snowtrees: Part & {
				Sound: Sound;
			};
			b12_water: Part & {
				Sound: Sound;
			};
			b15_sand: Part & {
				Sound: Sound;
			};
			b6_ice: Part & {
				Sound: Sound;
			};
			b4_waterfall: Part & {
				Sound: Sound;
			};
			b18_red_forest2: Part & {
				Sound: Sound;
			};
			["b11_corner-bambo"]: Part & {
				Sound: Sound;
			};
			b17_red_forest: Part & {
				Sound: Sound;
			};
			b7_foreset: Part & {
				Sound: Sound;
			};
			b8_beach: Part & {
				Sound: Sound;
			};
			b16_alge_forest: Part & {
				Sound: Sound;
			};
			b9_pinkforest: Part & {
				Sound: Sound;
			};
			egg_crate: Part & {
				Sound: Sound;
			};
			b13_water2: Part & {
				Sound: Sound;
			};
			b3_polyforest: Part & {
				Sound: Sound;
			};
		};
		snow: Folder & {
			["snow-26-30"]: Part & {
				ParticleEmitter: ParticleEmitter;
			};
			["snow-21-25"]: Part & {
				ParticleEmitter: ParticleEmitter;
			};
			leafDrops: Part & {
				effects: ParticleEmitter;
			};
		};
	};
}








interface ReplicatedStorage extends Instance {
	TS: Folder & {
		core: Folder & {
			Petie: ModuleScript;
			Syncer: ModuleScript;
			LeaderBoard: ModuleScript;
			Stages: ModuleScript;
			ServerSystems: ModuleScript;
			Client: ModuleScript;
			Miner: ModuleScript;
			Server: ModuleScript;
			EggHatch: ModuleScript;
			Boards: ModuleScript;
			Rebirth: ModuleScript;
			Upgrader: ModuleScript;
			ClientSystems: ModuleScript;
			HoverSystem: ModuleScript;
			CostUI: ModuleScript;
			Pager: ModuleScript;
			Hoverboard_bak: ModuleScript;
			Hoverboard: ModuleScript;
			TipsSystem: ModuleScript;
		};
		utils: Folder & {
			CONF: ModuleScript;
			TakePics: ModuleScript;
			Automator: ModuleScript;
			LDATA: ModuleScript;
			DATA: ModuleScript;
			assist: ModuleScript;
			helpers: ModuleScript;
			play_sound: ModuleScript;
			REGS: ModuleScript;
		};
		comps: Folder & {
			MainPopup: ModuleScript;
			LoadUI: ModuleScript;
			Teleporter: ModuleScript;
			CompHelpers: ModuleScript;
			Wrappers: ModuleScript;
			SideTools: ModuleScript;
			PlayTimeGifts: ModuleScript;
			Inventory: ModuleScript;
			TestUi: ModuleScript;
			QuickToast: ModuleScript;
			MountWrap: ModuleScript;
			ShopUI: ModuleScript;
			Settings: ModuleScript;
			Popups: ModuleScript;
			Notifier: ModuleScript;
			CompNotifiers: ModuleScript;
			Ranker: ModuleScript;
		};
		classes: Folder & {
			Egg: ModuleScript;
			DispencerSystem: ModuleScript;
			FusePets: ModuleScript;
			ActiveBoosts: ModuleScript;
			LightEffects: ModuleScript;
			ServerHelp: ModuleScript;
			TradeSystem: ModuleScript;
			FreeGifts: ModuleScript;
			TradeList: ModuleScript;
			ServerLeaderBoard: ModuleScript;
			GroupRewards: ModuleScript;
			Toast: ModuleScript;
			MergeFossils: ModuleScript;
			Pots: ModuleScript;
			InfoSystem: ModuleScript;
		};
		bonus: Folder & {
			NewAnimate: ModuleScript;
			BSync: ModuleScript;
			NewAnimateFootsteps: ModuleScript;
		};
	};
	["public"]: Folder & {
		models: Folder & {
			redhover: MeshPart;
			old_moneybag: Part & {
				Mesh: SpecialMesh;
				Weld: Weld;
			};
			Coin: MeshPart & {
				Decal1: Decal;
				Decal2: Decal;
			};
			CoinLight: MeshPart;
			rebirth_effect: Part & {
				Main: Attachment;
				MiscEffects: Attachment & {
					Lines: ParticleEmitter;
				};
			};
			Hoverboard: MeshPart & {
				Attachment: Attachment;
			};
			jar: Model;
			money_bag: MeshPart & {
				Trail: Trail;
				Att1: Attachment;
				Att2: Attachment;
			};
			Trail: Part & {
				Trail: Trail;
				Attachment2: Attachment;
				Attachment0: Attachment;
				Trail2: Trail;
				Attachment3: Attachment;
				Attachment1: Attachment;
			};
			Tntmade: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
				WeldConstraint: WeldConstraint;
			};
			moneybag2: MeshPart & {
				Trail: Trail;
				Att1: Attachment;
				Att2: Attachment;
			};
			tntcrate: Part;
			bonus_swirl: Part & {
				Ground2: Attachment;
				Swirl: ParticleEmitter;
			};
			CoinsFlag: MeshPart;
			MagnetFlag: MeshPart;
		};
		plots: Folder & {
			dino: Folder & {
				dino2: MeshPart;
				dino1: MeshPart;
				dino3: MeshPart;
				dino4: MeshPart;
			};
			fossil: Folder & {
				fossil3: MeshPart;
				fossil1: MeshPart;
				fossil2: MeshPart;
				fossil4: MeshPart;
			};
			crate: Folder & {
				crate1: MeshPart;
				crate3: MeshPart;
				crate2: MeshPart;
				crate4: MeshPart;
			};
			bone: Folder & {
				bone3: MeshPart;
				bone4: MeshPart;
				bone1: MeshPart;
				bone2: MeshPart;
			};
		};
		hovers: Folder & {
			Hoverboard5: MeshPart & {
				Trail: Trail;
				Center: Attachment;
				LeftCorner: Attachment;
				RightCorner: Attachment;
				Back: Attachment & {
					Sparkles: ParticleEmitter;
				};
			};
			Hoverboard7: MeshPart & {
				Trail: Trail;
				Center: Attachment;
				LeftCorner: Attachment;
				RightCorner: Attachment;
				Back: Attachment & {
					Sparkles: ParticleEmitter;
				};
			};
			Hoverboard2: MeshPart & {
				Trail: Trail;
				Center: Attachment;
				LeftCorner: Attachment;
				RightCorner: Attachment;
				Back: Attachment & {
					Sparkles: ParticleEmitter;
				};
			};
			Hoverboard8: MeshPart & {
				Trail: Trail;
				Center: Attachment;
				LeftCorner: Attachment;
				RightCorner: Attachment;
				Back: Attachment & {
					Sparkles: ParticleEmitter;
				};
			};
			Hoverboard6: MeshPart & {
				Trail: Trail;
				Center: Attachment;
				LeftCorner: Attachment;
				RightCorner: Attachment;
				Back: Attachment & {
					Sparkles: ParticleEmitter;
				};
			};
			Hoverboard3: MeshPart & {
				Trail: Trail;
				Center: Attachment;
				LeftCorner: Attachment;
				Sparkles: ParticleEmitter;
				RightCorner: Attachment;
				Back: Attachment & {
					Sparkles: ParticleEmitter;
				};
			};
			Hoverboard4: MeshPart & {
				Trail: Trail;
				Center: Attachment;
				LeftCorner: Attachment;
				RightCorner: Attachment;
				Back: Attachment & {
					Sparkles: ParticleEmitter;
				};
			};
			Hoverboard1: MeshPart & {
				Trail: Trail;
				Center: Attachment;
				LeftCorner: Attachment;
				RightCorner: Attachment;
				Back: Attachment & {
					Sparkles: ParticleEmitter;
				};
			};
		};
		cubes: Folder & {
			volcano2: MeshPart;
			blue: MeshPart;
			sand: MeshPart;
			mushroom: MeshPart;
			pink: MeshPart;
			ice: MeshPart;
			volcano: MeshPart;
			orange: MeshPart;
			red: MeshPart;
		};
		particles: Folder & {
			Celebration: Folder & {
				part: Part & {
					Leave: ParticleEmitter;
					["0"]: Attachment;
					Feather: ParticleEmitter;
					Spec: ParticleEmitter;
					["Spin Script"]: Script;
				};
			};
			littleBurst: Folder & {
				Sparkles: ParticleEmitter;
				Ring2: ParticleEmitter;
				Ring1: ParticleEmitter;
			};
			explosion: Folder & {
				BlackSmoke1: ParticleEmitter;
				QuickImpact1: ParticleEmitter;
				Light2: ParticleEmitter;
				GroundWind: ParticleEmitter;
				GroundCircle2: ParticleEmitter;
				Stars1: ParticleEmitter;
				BlackSmoke2: ParticleEmitter;
				["Shots?"]: ParticleEmitter;
				BigBlackImpact: ParticleEmitter;
				WindImpact: ParticleEmitter;
				LIght1: ParticleEmitter;
				QuickImpact2: ParticleEmitter;
				Stars2: ParticleEmitter;
				GroundCrack: ParticleEmitter;
				WeirdCrescent: ParticleEmitter;
				GroundCircle1: ParticleEmitter;
				BlackPulse: ParticleEmitter;
				BombStar: ParticleEmitter;
			};
			bigBurst: Folder & {
				Rings: ParticleEmitter;
				Flare: ParticleEmitter;
				Coins2: ParticleEmitter;
				Sparkles: ParticleEmitter;
				Coins: ParticleEmitter;
			};
		};
		items: Folder & {
			sign: Model & {
				ui: Part;
				Part: Part;
			};
			EGGS: Model & {
				["Meshes/EGGS_Sphere.005"]: MeshPart;
				["29"]: MeshPart;
				["Meshes/EGGS_Sphere.004"]: MeshPart;
				["1"]: MeshPart;
				["3"]: MeshPart;
				["2"]: MeshPart;
				["5"]: MeshPart;
				["4"]: MeshPart;
				["7"]: MeshPart;
				["6"]: MeshPart;
				["25"]: MeshPart;
				["8"]: MeshPart;
				["27"]: MeshPart;
				["17"]: MeshPart;
				["31"]: MeshPart;
				["21"]: MeshPart;
				["33"]: MeshPart;
				["23"]: MeshPart;
				["Meshes/EGGS_Sphere"]: MeshPart;
				["34"]: MeshPart;
				["Meshes/EGGS_Sphere.007"]: MeshPart;
				["28"]: MeshPart;
				["10"]: MeshPart;
				["12"]: MeshPart;
				["Meshes/EGGS_Sphere.001"]: MeshPart;
				["11"]: MeshPart;
				["32"]: MeshPart;
				["13"]: MeshPart;
				["9"]: MeshPart;
				["19"]: MeshPart;
				["18"]: MeshPart;
				["15"]: MeshPart;
				["Meshes/EGGS_Sphere.003"]: MeshPart;
				["14"]: MeshPart;
				["Meshes/EGGS_Sphere.002"]: MeshPart;
				["16"]: MeshPart;
				["26"]: MeshPart;
				["20"]: MeshPart;
				["30"]: MeshPart;
				["22"]: MeshPart;
				["Meshes/EGGS_Sphere.006"]: MeshPart;
			};
			gift_effect: Part;
			Plane: MeshPart & {
				a15: Attachment;
				a9: Attachment;
				a8: Attachment;
				a4: Attachment;
				a5: Attachment;
				a6: Attachment;
				a7: Attachment;
				a10: Attachment;
				a2: Attachment;
				a1: Attachment;
				a17: Attachment;
				a13: Attachment;
				a16: Attachment;
				a14: Attachment;
				a11: Attachment;
				a12: Attachment;
				a3: Attachment;
			};
		};
	};
	instance: Folder & {
		models: Folder & {
			PetObj: Model & {
				Animator: RemoteEvent & {
					Server: Script;
				};
				Base: Part;
				Obj: Model & {
					["Left Leg"]: Part;
					["Right Arm"]: Part;
					["Right Leg"]: Part;
					["Left Arm"]: Part;
					AnimationController: AnimationController;
					Torso: Part & {
						["Left Shoulder"]: Motor6D;
						["Right Shoulder"]: Motor6D;
						Neck: Motor6D;
						["Right Hip"]: Motor6D;
						["Left Hip"]: Motor6D;
					};
					Head: Part;
					Body: Part & {
						["Root Hip"]: Motor6D;
					};
				};
			};
			Footprints: Folder & {
				Grass: Model & {
					Foot: Part & {
						Decal: Decal;
					};
				};
				Sand: Model & {
					Foot: Part & {
						ParticleEmitter: ParticleEmitter;
					};
				};
				Dirt: Model & {
					Foot: Part & {
						Decal: Decal;
					};
				};
				Snow: Model & {
					Foot: Part;
				};
			};
			eggie: Folder & {
				egg_stand22: Model & {
					Egg: MeshPart;
					EggHolder: Model & {
						Part: Part & {
							Beam: Beam;
						};
						Model: Model & {
							["Mesh Parts"]: MeshPart;
							Model: Model;
						};
					};
					NeonLight: MeshPart;
					Screen: Part & {
						SurfaceGui: SurfaceGui & {
							TextLabel: TextLabel;
						};
					};
					Base: Model & {
						["Mesh Parts"]: MeshPart;
					};
					Light: MeshPart;
				};
				trans_arrow: MeshPart;
				egg_stand: Model & {
					Egg: MeshPart;
					EggHolder: Model & {
						Part: Part & {
							Beam: Beam;
						};
						Model: Model & {
							["Mesh Parts"]: MeshPart;
							Model: Model;
						};
					};
					NeonLight: MeshPart;
					Screen: Part & {
						SurfaceGui: SurfaceGui & {
							TextLabel: TextLabel;
						};
					};
					Base: Model & {
						["Mesh Parts"]: MeshPart & {
							Attachment: Attachment & {
								PointLight: PointLight;
							};
						};
					};
					Light: MeshPart;
				};
			};
		};
		pets: Folder & {
			["03_dodo"]: Model & {
				Body: MeshPart & {
					["Foot.R"]: Bone;
					RootPart: Bone & {
						Body: Bone & {
							["wing.R"]: Bone;
							tail: Bone;
							["wing.L"]: Bone;
							Head: Bone & {
								feather: Bone;
							};
						};
					};
					["Foot.L"]: Bone;
				};
			};
			["5_terror_bird"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Terror_Bird_5_Initial: CFrameValue;
					Body_Original: CFrameValue;
					tail_01_Composited: CFrameValue;
					Neck_01_Initial: CFrameValue;
					RootPart_Original: CFrameValue;
					Foot_end_R_Initial: CFrameValue;
					wing_end_R_Composited: CFrameValue;
					Body_Composited: CFrameValue;
					Foot_R_Composited: CFrameValue;
					wing_L_Original: CFrameValue;
					Foot_end_L_Initial: CFrameValue;
					Foot_R_Original: CFrameValue;
					wing_end_L_Composited: CFrameValue;
					RootPart_Composited: CFrameValue;
					wing_L_Composited: CFrameValue;
					tail_01_end_Initial: CFrameValue;
					Foot_end_L_Composited: CFrameValue;
					tail_01_Initial: CFrameValue;
					Neck_02_Composited: CFrameValue;
					wing_R_Original: CFrameValue;
					Foot_L_Original: CFrameValue;
					Foot_L_Composited: CFrameValue;
					tail_01_Original: CFrameValue;
					Foot_L_Initial: CFrameValue;
					Foot_R_Initial: CFrameValue;
					Neck_02_Original: CFrameValue;
					wing_R_Composited: CFrameValue;
					wing_L_Initial: CFrameValue;
					wing_end_R_Initial: CFrameValue;
					wing_end_R_Original: CFrameValue;
					wing_R_Initial: CFrameValue;
					Foot_end_R_Composited: CFrameValue;
					Foot_end_L_Original: CFrameValue;
					tail_01_end_Original: CFrameValue;
					Head_Initial: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Terror_Bird_5_Original: CFrameValue;
					Terror_Bird_5_Composited: CFrameValue;
					tail_01_end_Composited: CFrameValue;
					wing_end_L_Initial: CFrameValue;
					Neck_02_Initial: CFrameValue;
					wing_end_L_Original: CFrameValue;
					Foot_end_R_Original: CFrameValue;
					Neck_01_Original: CFrameValue;
					RootPart_Initial: CFrameValue;
					Neck_01_Composited: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							Neck_01: Bone & {
								Neck_02: Bone & {
									Head: Bone;
								};
							};
							wing_R: Bone;
							tail_01: Bone;
							Foot_L: Bone;
							Foot_R: Bone;
							wing_L: Bone;
						};
					};
				};
			};
			["2_coelodonta"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					["FFoot.R_end_Original"]: CFrameValue;
					Coelodonta_2_Composited: CFrameValue;
					Body_Original: CFrameValue;
					["BFoot.R_end_Composited"]: CFrameValue;
					["BFoot.R_end_Initial"]: CFrameValue;
					["FFoot.R_end_Composited"]: CFrameValue;
					RootPart_Original: CFrameValue;
					["FFoot.R_end_Initial"]: CFrameValue;
					Tail1_Composited: CFrameValue;
					Body_Composited: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					FFoot_L_Original: CFrameValue;
					Tail1_Initial: CFrameValue;
					Coelodonta_2_Initial: CFrameValue;
					RootPart_Composited: CFrameValue;
					["BFoot.R_end_Original"]: CFrameValue;
					Tail2_Original: CFrameValue;
					FFoot_R_Original: CFrameValue;
					BFoot_R_Original: CFrameValue;
					Tail2_Composited: CFrameValue;
					Head_Initial: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					BFoot_L_Original: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Coelodonta_2_Original: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					Tail2_Initial: CFrameValue;
					Tail1_Original: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Head: Bone;
							FFoot_R: Bone;
							FFoot_L: Bone;
							Tail1: Bone & {
								Tail2: Bone;
							};
						};
					};
				};
			};
			["07_bracho"]: Model & {
				Body: MeshPart;
			};
			["7_guardian_dog"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Chain_01_Original: CFrameValue;
					Chain_02_Initial: CFrameValue;
					BFoot_end_R_Composited: CFrameValue;
					Body_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					FFoot_end_R_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					Guardian_Dog_7_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					Chain_02_Original: CFrameValue;
					Guardian_Dog_7_Initial: CFrameValue;
					RootPart_Composited: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					Chain_01_Initial: CFrameValue;
					FFoot_end_L_Original: CFrameValue;
					FFoot_R_Original: CFrameValue;
					BFoot_end_R_Original: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					Chain_02_Composited: CFrameValue;
					BFoot_R_Original: CFrameValue;
					FFoot_L_Original: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					Tail_02_Original: CFrameValue;
					Tail_01_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					FFoot_end_R_Original: CFrameValue;
					BFoot_end_L_Original: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					BFoot_L_Original: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					Chain_01_Composited: CFrameValue;
					Head_Original: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					Guardian_Dog_7_Composited: CFrameValue;
					FFoot_end_L_Composited: CFrameValue;
					FFoot_end_R_Initial: CFrameValue;
					Head_Initial: CFrameValue;
					FFoot_end_L_Initial: CFrameValue;
					BFoot_end_L_Composited: CFrameValue;
					BFoot_end_R_Initial: CFrameValue;
					Body_Composited: CFrameValue;
					BFoot_end_L_Initial: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Head: Bone;
							Chain_01: Bone & {
								Chain_02: Bone;
							};
							FFoot_R: Bone;
							FFoot_L: Bone;
							Tail_01: Bone & {
								Tail_02: Bone;
							};
						};
					};
				};
			};
			["13_bearded_dragon"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Tail_11_Composited: CFrameValue;
					Bearded_Dragon_13_Composited: CFrameValue;
					Tail_01_Original: CFrameValue;
					Bearded_Dragon_13_Initial: CFrameValue;
					RootPart_Original: CFrameValue;
					BFoot_end_R_Original: CFrameValue;
					BFoot_end_L_Original: CFrameValue;
					Tail_04_Original: CFrameValue;
					FFoot_end_R_Original: CFrameValue;
					FFoot_end_L_Original: CFrameValue;
					Tail_03_Initial: CFrameValue;
					Tail_09_Composited: CFrameValue;
					Tail_05_Initial: CFrameValue;
					Tail_10_Composited: CFrameValue;
					Tail_06_Original: CFrameValue;
					BFoot_R_Original: CFrameValue;
					Tail_07_Initial: CFrameValue;
					Tail_02_Original: CFrameValue;
					Tail_05_Original: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					Tail_09_Original: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_05_Composited: CFrameValue;
					Tail_08_Composited: CFrameValue;
					Tail_10_Original: CFrameValue;
					Tail_08_Original: CFrameValue;
					BFoot_end_R_Composited: CFrameValue;
					Body_Original: CFrameValue;
					FFoot_end_R_Composited: CFrameValue;
					Tail_08_Initial: CFrameValue;
					Tail_11_Original: CFrameValue;
					joint10_Initial: CFrameValue;
					Tail_10_Initial: CFrameValue;
					RootPart_Composited: CFrameValue;
					FFoot_R_Original: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					Tail_11_Initial: CFrameValue;
					Tail_04_Initial: CFrameValue;
					FFoot_L_Original: CFrameValue;
					Bearded_Dragon_13_Original: CFrameValue;
					joint10_Composited: CFrameValue;
					Tail_06_Initial: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					joint10_Original: CFrameValue;
					Tail_07_Composited: CFrameValue;
					Tail_06_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					Tail_01_Composited: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					Tail_03_Original: CFrameValue;
					Tail_07_Original: CFrameValue;
					BFoot_L_Original: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					Head_Initial: CFrameValue;
					Tail_03_Composited: CFrameValue;
					Body_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					Tail_01_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					FFoot_end_L_Composited: CFrameValue;
					FFoot_end_R_Initial: CFrameValue;
					Tail_04_Composited: CFrameValue;
					FFoot_end_L_Initial: CFrameValue;
					BFoot_end_L_Composited: CFrameValue;
					BFoot_end_R_Initial: CFrameValue;
					Tail_09_Initial: CFrameValue;
					BFoot_end_L_Initial: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Head: Bone;
							FFoot_R: Bone;
							FFoot_L: Bone;
							Tail_01: Bone & {
								Tail_02: Bone & {
									Tail_03: Bone & {
										Tail_04: Bone & {
											Tail_05: Bone & {
												Tail_06: Bone & {
													Tail_07: Bone & {
														Tail_08: Bone & {
															Tail_09: Bone & {
																Tail_10: Bone & {
																	Tail_11: Bone;
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
			["16_sphinx"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Sphinx_16_Original: CFrameValue;
					BFoot_end_R_Composited: CFrameValue;
					Body_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					FFoot_end_R_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					FFoot_L_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					FFoot_end_L_Original: CFrameValue;
					Tail_03_Initial: CFrameValue;
					Sphinx_16_Composited: CFrameValue;
					RootPart_Composited: CFrameValue;
					FFoot_R_Original: CFrameValue;
					BFoot_end_L_Initial: CFrameValue;
					BFoot_end_L_Original: CFrameValue;
					BFoot_R_Original: CFrameValue;
					Tail_03_Original: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					Tail_02_Original: CFrameValue;
					Tail_01_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					BFoot_L_Original: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					Tail_03_Composited: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					FFoot_end_R_Original: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					BFoot_end_R_Original: CFrameValue;
					FFoot_end_L_Composited: CFrameValue;
					FFoot_end_R_Initial: CFrameValue;
					Head_Initial: CFrameValue;
					FFoot_end_L_Initial: CFrameValue;
					BFoot_end_L_Composited: CFrameValue;
					BFoot_end_R_Initial: CFrameValue;
					Body_Composited: CFrameValue;
					Sphinx_16_Initial: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Head: Bone;
							FFoot_R: Bone;
							FFoot_L: Bone;
							Tail_01: Bone & {
								Tail_02: Bone & {
									Tail_03: Bone;
								};
							};
						};
					};
				};
			};
			["8_imagotaria"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Hand_L_Original: CFrameValue;
					Body_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Hand_End_R_Composited: CFrameValue;
					Body_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					Hand_02_L_Original: CFrameValue;
					Tail_04_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					Hand_R_Original: CFrameValue;
					Tail_03_Initial: CFrameValue;
					Hand_02_R_Original: CFrameValue;
					Hand_End_R_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					Hand_End_L_Initial: CFrameValue;
					Hand_End_L_Original: CFrameValue;
					Tail_04_Composited: CFrameValue;
					Tail_04_Initial: CFrameValue;
					Hand_End_L_Composited: CFrameValue;
					Hand_02_L_Composited: CFrameValue;
					Hand_02_R_Initial: CFrameValue;
					Hand_02_L_Initial: CFrameValue;
					Imagotaria_8_Original: CFrameValue;
					Tail_end_R_Composited: CFrameValue;
					Tail_02_Original: CFrameValue;
					Tail_05_Original: CFrameValue;
					RootPart_Initial: CFrameValue;
					Hand_L_Initial: CFrameValue;
					Tail_end_R_Original: CFrameValue;
					Tail_03_Original: CFrameValue;
					Hand_L_Composited: CFrameValue;
					Hand_End_R_Initial: CFrameValue;
					Hand_02_R_Composited: CFrameValue;
					Hand_R_Initial: CFrameValue;
					Tail_03_Composited: CFrameValue;
					Head_Initial: CFrameValue;
					Tail_end_L_Initial: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					Hand_R_Composited: CFrameValue;
					Imagotaria_8_Composited: CFrameValue;
					Tail_end_L_Original: CFrameValue;
					Tail_end_R_Initial: CFrameValue;
					Tail_end_L_Composited: CFrameValue;
					Imagotaria_8_Initial: CFrameValue;
					Tail_01_Composited: CFrameValue;
					Tail_05_Initial: CFrameValue;
					Tail_05_Composited: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							Hand_L: Bone & {
								Hand_02_L: Bone;
							};
							Tail_01: Bone & {
								Tail_02: Bone & {
									Tail_03: Bone & {
										Tail_04: Bone & {
											Tail_05: Bone;
										};
									};
								};
							};
							Hand_R: Bone & {
								Hand_02_R: Bone;
							};
							Head: Bone;
						};
					};
				};
			};
			["14_horned_cobra"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Body_06_Composited: CFrameValue;
					Neck_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					Body_02_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Body_03_Composited: CFrameValue;
					Horned_Cobra_14_Initial: CFrameValue;
					Tail_02_Composited: CFrameValue;
					Body_05_Initial: CFrameValue;
					Tail_04_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					Body_06_Original: CFrameValue;
					Body_01_Initial: CFrameValue;
					Horned_Cobra_14_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					Neck_Initial: CFrameValue;
					Tail_04_Composited: CFrameValue;
					Tail_04_Initial: CFrameValue;
					Body_04_Initial: CFrameValue;
					Body_02_Composited: CFrameValue;
					Body_04_Original: CFrameValue;
					Head_Initial: CFrameValue;
					Tail_01_Composited: CFrameValue;
					Body_05_Composited: CFrameValue;
					Body_03_Original: CFrameValue;
					Body_05_Original: CFrameValue;
					Tail_03_Original: CFrameValue;
					Body_07_Initial: CFrameValue;
					Tail_03_Initial: CFrameValue;
					Body_02_Initial: CFrameValue;
					Tail_03_Composited: CFrameValue;
					Tail_02_Initial: CFrameValue;
					Tail_02_Original: CFrameValue;
					Head_Composited: CFrameValue;
					Head_Original: CFrameValue;
					Body_07_Original: CFrameValue;
					Body_04_Composited: CFrameValue;
					Body_01_Original: CFrameValue;
					Body_07_Composited: CFrameValue;
					Neck_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					Body_06_Initial: CFrameValue;
					Body_03_Initial: CFrameValue;
					Body_01_Composited: CFrameValue;
					Horned_Cobra_14_Composited: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Head: Bone & {
							Neck: Bone & {
								Body_01: Bone & {
									Body_02: Bone & {
										Body_03: Bone & {
											Body_04: Bone & {
												Body_05: Bone & {
													Body_06: Bone & {
														Body_07: Bone & {
															Tail_01: Bone & {
																Tail_02: Bone & {
																	Tail_03: Bone & {
																		Tail_04: Bone;
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
			["01_sabertooth"]: Model & {
				Body: MeshPart & {
					["BLeg.L"]: Bone;
					["FLeg.R"]: Bone;
					["FLeg.L"]: Bone;
					tail: Bone & {
						["tail.001"]: Bone & {
							["tail.002"]: Bone & {
								["tail.003"]: Bone & {
									["tail.004"]: Bone;
								};
							};
						};
					};
					["BLeg.R"]: Bone;
					body: Bone & {
						head: Bone;
					};
				};
			};
			["9_guardian_crocodile"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Body_Original: CFrameValue;
					tail_02_Original: CFrameValue;
					tail_01_Composited: CFrameValue;
					wing_R_Initial: CFrameValue;
					RootPart_Original: CFrameValue;
					Foot_end_R_Initial: CFrameValue;
					wing_end_R_Composited: CFrameValue;
					Body_Composited: CFrameValue;
					Foot_R_Composited: CFrameValue;
					wing_L_Original: CFrameValue;
					tail_02_Initial: CFrameValue;
					Foot_end_L_Initial: CFrameValue;
					Foot_R_Original: CFrameValue;
					wing_end_L_Composited: CFrameValue;
					RootPart_Composited: CFrameValue;
					Guardian_Crocodile_9_Initial: CFrameValue;
					Foot_end_R_Composited: CFrameValue;
					wing_R_Original: CFrameValue;
					tail_end_Initial: CFrameValue;
					tail_01_Original: CFrameValue;
					Foot_L_Initial: CFrameValue;
					Foot_R_Initial: CFrameValue;
					Guardian_Crocodile_9_Original: CFrameValue;
					wing_R_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					wing_L_Initial: CFrameValue;
					wing_L_Composited: CFrameValue;
					Foot_end_L_Composited: CFrameValue;
					tail_02_Composited: CFrameValue;
					Foot_end_L_Original: CFrameValue;
					Foot_L_Original: CFrameValue;
					Foot_L_Composited: CFrameValue;
					tail_01_Initial: CFrameValue;
					Body_Initial: CFrameValue;
					tail_end_Composited: CFrameValue;
					wing_end_R_Initial: CFrameValue;
					wing_end_R_Original: CFrameValue;
					wing_end_L_Initial: CFrameValue;
					Head_Initial: CFrameValue;
					wing_end_L_Original: CFrameValue;
					Foot_end_R_Original: CFrameValue;
					tail_end_Original: CFrameValue;
					Head_Composited: CFrameValue;
					Guardian_Crocodile_9_Composited: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							Foot_L: Bone & {
								Foot_end_L: Bone;
							};
							wing_R: Bone;
							Head: Bone;
							wing_L: Bone;
							Foot_R: Bone & {
								Foot_end_R: Bone;
							};
							tail_01: Bone & {
								tail_02: Bone & {
									tail_end: Bone;
								};
							};
						};
					};
				};
			};
			["3_glyptodon"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					["FFoot.R_end_Original"]: CFrameValue;
					Body_Original: CFrameValue;
					Glyptodon_3_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					["BFoot.R_end_Initial"]: CFrameValue;
					["FFoot.R_end_Composited"]: CFrameValue;
					RootPart_Original: CFrameValue;
					["FFoot.R_end_Initial"]: CFrameValue;
					Body_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					FFoot_L_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					Tail_03_Initial: CFrameValue;
					Glyptodon_3_Initial: CFrameValue;
					RootPart_Composited: CFrameValue;
					["BFoot.R_end_Original"]: CFrameValue;
					FFoot_R_Original: CFrameValue;
					BFoot_R_Original: CFrameValue;
					Tail_02_Original: CFrameValue;
					Tail_01_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					BFoot_L_Original: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					Tail_03_Composited: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					Head_Composited: CFrameValue;
					["BFoot.R_end_Composited"]: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					Glyptodon_3_Composited: CFrameValue;
					Tail_03_Original: CFrameValue;
					Head_Initial: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Tail_01: Bone & {
								Tail_02: Bone & {
									Tail_03: Bone;
								};
							};
							FFoot_R: Bone;
							FFoot_L: Bone;
							Head: Bone;
						};
					};
				};
			};
			["15_stripped_owl"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Hand_L_Original: CFrameValue;
					Body_Original: CFrameValue;
					Foot_end_L_Composited: CFrameValue;
					Foot_end_R_Initial: CFrameValue;
					Body_Composited: CFrameValue;
					Foot_R_Composited: CFrameValue;
					Hand_R_Original: CFrameValue;
					Foot_end_L_Initial: CFrameValue;
					Foot_R_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					Hand_end_R_Composited: CFrameValue;
					ra_15_Composited: CFrameValue;
					Foot_L_Composited: CFrameValue;
					ra_15_Initial: CFrameValue;
					Head_Initial: CFrameValue;
					Foot_L_Initial: CFrameValue;
					Foot_R_Initial: CFrameValue;
					Hand_R_Initial: CFrameValue;
					Hand_end_L_Original: CFrameValue;
					Hand_end_L_Initial: CFrameValue;
					Foot_end_L_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Hand_L_Initial: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Hand_L_Composited: CFrameValue;
					Hand_R_Composited: CFrameValue;
					ra_15_Original: CFrameValue;
					Foot_end_R_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					Foot_L_Original: CFrameValue;
					Foot_end_R_Original: CFrameValue;
					Hand_end_L_Composited: CFrameValue;
					Hand_end_R_Initial: CFrameValue;
					Hand_end_R_Original: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							Foot_L: Bone;
							Hand_R: Bone;
							Head: Bone;
							Hand_L: Bone;
							Foot_R: Bone;
						};
					};
				};
			};
			["6_behemotops"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					BFoot_end_R_Composited: CFrameValue;
					Body_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					Behemotops_6_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Body_Composited: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					BFoot_end_L_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					FFoot_end_L_Original: CFrameValue;
					Behemotops_6_Composited: CFrameValue;
					RootPart_Composited: CFrameValue;
					Behemotops_6_Initial: CFrameValue;
					FFoot_R_Original: CFrameValue;
					BFoot_R_Original: CFrameValue;
					FFoot_end_R_Composited: CFrameValue;
					Tail_02_Original: CFrameValue;
					Tail_01_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					FFoot_end_R_Original: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					BFoot_L_Original: CFrameValue;
					FFoot_L_Original: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					Head_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					FFoot_end_L_Composited: CFrameValue;
					FFoot_end_R_Initial: CFrameValue;
					Head_Initial: CFrameValue;
					FFoot_end_L_Initial: CFrameValue;
					BFoot_end_L_Composited: CFrameValue;
					BFoot_end_R_Initial: CFrameValue;
					BFoot_end_R_Original: CFrameValue;
					BFoot_end_L_Initial: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Head: Bone;
							FFoot_R: Bone;
							FFoot_L: Bone;
							Tail_01: Bone & {
								Tail_02: Bone;
							};
						};
					};
				};
			};
			["10_giant_crab"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Claws_Lower_R_Composited: CFrameValue;
					Eye_L_Initial: CFrameValue;
					Eye_End_R_Initial: CFrameValue;
					Eye_End_L_Composited: CFrameValue;
					RootPart_Original: CFrameValue;
					Foot_02_L_Initial: CFrameValue;
					Foot_01_R_Original: CFrameValue;
					Foot_01_L_Original: CFrameValue;
					Claws_L_Original: CFrameValue;
					Foot_02_R_Composited: CFrameValue;
					Foot_02_L_Composited: CFrameValue;
					Claws_R_Initial: CFrameValue;
					Foot_end_03_R_Composited: CFrameValue;
					Claws_L_Composited: CFrameValue;
					Eye_R_Composited: CFrameValue;
					Giant_Crab_10_Composited: CFrameValue;
					Foot_03_R_Initial: CFrameValue;
					Eye_End_R_Original: CFrameValue;
					Claws_Lower_L_Original: CFrameValue;
					Body_Initial: CFrameValue;
					Foot_01_L_Composited: CFrameValue;
					Foot_end_01_L_Original: CFrameValue;
					Giant_Crab_10_Initial: CFrameValue;
					Foot_end_03_L_Original: CFrameValue;
					Foot_03_L_Initial: CFrameValue;
					Body_Original: CFrameValue;
					Shell_Original: CFrameValue;
					Foot_03_L_Original: CFrameValue;
					Foot_end_02_R_Initial: CFrameValue;
					Claws_L_Initial: CFrameValue;
					Claws_Lower_R_Original: CFrameValue;
					Claws_Lower_L_Composited: CFrameValue;
					Foot_end_02_L_Original: CFrameValue;
					Eye_L_Composited: CFrameValue;
					Eye_R_Initial: CFrameValue;
					Foot_02_R_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					Foot_end_03_R_Initial: CFrameValue;
					Claws_Lower_L_Initial: CFrameValue;
					Foot_end_03_L_Initial: CFrameValue;
					Foot_02_L_Original: CFrameValue;
					Foot_end_02_L_Initial: CFrameValue;
					Foot_end_01_R_Initial: CFrameValue;
					Foot_03_R_Original: CFrameValue;
					Giant_Crab_10_Original: CFrameValue;
					Foot_02_R_Initial: CFrameValue;
					Foot_01_R_Initial: CFrameValue;
					Foot_end_02_R_Composited: CFrameValue;
					Claws_R_Original: CFrameValue;
					RootPart_Initial: CFrameValue;
					Foot_end_02_R_Original: CFrameValue;
					Eye_End_R_Composited: CFrameValue;
					Eye_End_L_Original: CFrameValue;
					Shell_Composited: CFrameValue;
					Foot_03_L_Composited: CFrameValue;
					Shell_Initial: CFrameValue;
					Foot_end_02_L_Composited: CFrameValue;
					Body_Composited: CFrameValue;
					Claws_R_Composited: CFrameValue;
					Foot_03_R_Composited: CFrameValue;
					Eye_End_L_Initial: CFrameValue;
					Foot_end_01_L_Initial: CFrameValue;
					Foot_end_03_L_Composited: CFrameValue;
					Foot_01_R_Composited: CFrameValue;
					Foot_end_01_L_Composited: CFrameValue;
					Foot_01_L_Initial: CFrameValue;
					Foot_end_03_R_Original: CFrameValue;
					Foot_end_01_R_Composited: CFrameValue;
					Foot_end_01_R_Original: CFrameValue;
					Eye_R_Original: CFrameValue;
					Claws_Lower_R_Initial: CFrameValue;
					Eye_L_Original: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							Foot_03_R: Bone & {
								Foot_end_03_R: Bone;
							};
							Eye_R: Bone & {
								Eye_End_R: Bone;
							};
							Foot_03_L: Bone & {
								Foot_end_03_L: Bone;
							};
							Foot_02_R: Bone & {
								Foot_end_02_R: Bone;
							};
							Eye_L: Bone & {
								Eye_End_L: Bone;
							};
							Claws_L: Bone & {
								Claws_Lower_L: Bone;
							};
							Foot_01_L: Bone & {
								Foot_end_01_L: Bone;
							};
							Foot_01_R: Bone & {
								Foot_end_01_R: Bone;
							};
							Foot_02_L: Bone & {
								Foot_end_02_L: Bone;
							};
							Claws_R: Bone & {
								Claws_Lower_R: Bone;
							};
							Shell: Bone;
						};
					};
				};
			};
			["02_triceratops"]: Model & {
				Body: MeshPart & {
					Root: Bone & {
						["BLeg.L"]: Bone;
						["FLeg.R"]: Bone;
						["FLeg.L"]: Bone;
						["BLeg.R"]: Bone;
						Body: Bone & {
							head: Bone;
							["Body.001"]: Bone & {
								["Body.002"]: Bone & {
									["Body.003"]: Bone & {
										["Body.004"]: Bone & {
											["Body.005"]: Bone;
										};
									};
								};
							};
						};
					};
				};
			};
			["1_castoroides"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Castoroides_1_Initial: CFrameValue;
					BFoot_end_R_Composited: CFrameValue;
					Body_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					FFoot_end_R_Composited: CFrameValue;
					BFoot_end_R_Original: CFrameValue;
					BFoot_end_L_Original: CFrameValue;
					FFoot_end_R_Original: CFrameValue;
					FFoot_end_L_Original: CFrameValue;
					Tail_03_Initial: CFrameValue;
					RootPart_Composited: CFrameValue;
					Tail_03_Original: CFrameValue;
					FFoot_R_Original: CFrameValue;
					FFoot_L_Original: CFrameValue;
					Castoroides_1_Original: CFrameValue;
					Tail_01_Composited: CFrameValue;
					BFoot_R_Original: CFrameValue;
					Tail_02_Composited: CFrameValue;
					Tail_01_Initial: CFrameValue;
					Tail_02_Original: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					Body_Composited: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					BFoot_L_Original: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					Heat_Initial: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					Tail_03_Composited: CFrameValue;
					Heat_Original: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					FFoot_end_L_Composited: CFrameValue;
					Castoroides_1_Composited: CFrameValue;
					FFoot_end_R_Initial: CFrameValue;
					FFoot_end_L_Initial: CFrameValue;
					BFoot_end_L_Composited: CFrameValue;
					Heat_Composited: CFrameValue;
					BFoot_end_R_Initial: CFrameValue;
					BFoot_end_L_Initial: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Tail_01: Bone & {
								Tail_02: Bone & {
									Tail_03: Bone;
								};
							};
							FFoot_R: Bone;
							FFoot_L: Bone;
							Heat: Bone;
						};
					};
				};
			};
			["12_leon_desert"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					BFoot_end_R_Composited: CFrameValue;
					Body_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					Leon_Desert_12_Initial: CFrameValue;
					RootPart_Original: CFrameValue;
					FFoot_end_R_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					BFoot_end_L_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					FFoot_end_L_Original: CFrameValue;
					Tail_03_Initial: CFrameValue;
					RootPart_Composited: CFrameValue;
					FFoot_R_Original: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					FFoot_end_L_Composited: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					BFoot_R_Original: CFrameValue;
					FFoot_L_Original: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					Tail_02_Original: CFrameValue;
					Tail_01_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					Body_Composited: CFrameValue;
					Head_Initial: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					BFoot_L_Original: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					Tail_03_Composited: CFrameValue;
					Tail_03_Original: CFrameValue;
					Leon_Desert_12_Original: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					BFoot_end_R_Original: CFrameValue;
					Leon_Desert_12_Composited: CFrameValue;
					FFoot_end_R_Initial: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					FFoot_end_L_Initial: CFrameValue;
					BFoot_end_L_Composited: CFrameValue;
					BFoot_end_R_Initial: CFrameValue;
					FFoot_end_R_Original: CFrameValue;
					BFoot_end_L_Initial: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Head: Bone;
							FFoot_R: Bone;
							FFoot_L: Bone;
							Tail_01: Bone & {
								Tail_02: Bone & {
									Tail_03: Bone;
								};
							};
						};
					};
				};
			};
			["17_anubis"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Neck_Original: CFrameValue;
					Hand_L_Original: CFrameValue;
					Body_Original: CFrameValue;
					Anubis_17_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Foot_end_R_Initial: CFrameValue;
					Body_Composited: CFrameValue;
					Foot_R_Composited: CFrameValue;
					Hand_R_Original: CFrameValue;
					Foot_end_L_Initial: CFrameValue;
					Foot_R_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					Neck_Initial: CFrameValue;
					Foot_end_R_Composited: CFrameValue;
					Hand_L_Initial: CFrameValue;
					Foot_L_Initial: CFrameValue;
					Foot_R_Initial: CFrameValue;
					Hand_end_L_Initial: CFrameValue;
					Hand_R_Initial: CFrameValue;
					Foot_end_L_Composited: CFrameValue;
					Foot_L_Original: CFrameValue;
					Hand_end_L_Original: CFrameValue;
					Foot_L_Composited: CFrameValue;
					Foot_end_L_Original: CFrameValue;
					Hand_end_R_Initial: CFrameValue;
					Head_Initial: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Hand_L_Composited: CFrameValue;
					Hand_R_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					Anubis_17_Composited: CFrameValue;
					Neck_Composited: CFrameValue;
					Anubis_17_Initial: CFrameValue;
					Foot_end_R_Original: CFrameValue;
					Hand_end_L_Composited: CFrameValue;
					Hand_end_R_Composited: CFrameValue;
					Hand_end_R_Original: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							Foot_L: Bone;
							Hand_R: Bone;
							Hand_L: Bone;
							Foot_R: Bone;
							Neck: Bone & {
								Head: Bone;
							};
						};
					};
				};
			};
			["09_stego"]: Model & {
				Body: MeshPart & {
					["FFoot.L"]: Bone;
					["BFoot.R"]: Bone;
					["BFoot.L"]: Bone;
					RootPart: Bone & {
						Body: Bone & {
							Neck: Bone & {
								Neck2: Bone & {
									Heat: Bone;
								};
							};
							Tail: Bone & {
								["Tail.001"]: Bone & {
									["Tail.002"]: Bone & {
										["Tail.004"]: Bone & {
											["Tail.005"]: Bone;
										};
									};
								};
							};
						};
					};
					["FFoot.R"]: Bone;
				};
			};
			["08_trex"]: Model & {
				Body: MeshPart & {
					Root: Bone & {
						Body: Bone & {
							head: Bone;
							Tail: Bone & {
								["Tail.001"]: Bone & {
									["Tail.002"]: Bone & {
										["Tail.003"]: Bone & {
											["Tail.004"]: Bone & {
												["Tail.005"]: Bone;
											};
										};
									};
								};
							};
							["Hand.L"]: Bone;
							["Hand.R"]: Bone;
						};
					};
					["Leg.L"]: Bone;
					["Leg.R"]: Bone;
				};
			};
			["05_black_velo"]: Model & {
				BodyOld: MeshPart & {
					Root: Bone & {
						Body: Bone & {
							["Leg.L"]: Bone;
							["Hand.L"]: Bone;
							head: Bone;
							Tail: Bone & {
								["Tail.001"]: Bone & {
									["Tail.002"]: Bone & {
										["Tail.003"]: Bone & {
											["Tail.004"]: Bone;
										};
									};
								};
							};
							["Leg.R"]: Bone;
							["Hand.R"]: Bone;
						};
					};
				};
				Body: MeshPart;
			};
			["18_spirit_bear"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Hand_L_Original: CFrameValue;
					Body_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Foot_end_R_Initial: CFrameValue;
					Body_Composited: CFrameValue;
					Foot_R_Composited: CFrameValue;
					Tail_01_Initial: CFrameValue;
					Spirit_Bear_18_Composited: CFrameValue;
					Hand_R_Original: CFrameValue;
					Foot_end_L_Initial: CFrameValue;
					Foot_R_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					Hand_end_R_Composited: CFrameValue;
					Foot_end_R_Composited: CFrameValue;
					Head_Initial: CFrameValue;
					Tail_01_Composited: CFrameValue;
					Foot_R_Initial: CFrameValue;
					Hand_R_Initial: CFrameValue;
					Foot_L_Original: CFrameValue;
					Foot_end_L_Composited: CFrameValue;
					Hand_end_L_Original: CFrameValue;
					Foot_L_Initial: CFrameValue;
					Foot_end_L_Original: CFrameValue;
					Foot_L_Composited: CFrameValue;
					Hand_end_L_Initial: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Hand_L_Composited: CFrameValue;
					Hand_R_Composited: CFrameValue;
					Hand_end_R_Initial: CFrameValue;
					Hand_L_Initial: CFrameValue;
					RootPart_Initial: CFrameValue;
					Spirit_Bear_18_Original: CFrameValue;
					Foot_end_R_Original: CFrameValue;
					Hand_end_L_Composited: CFrameValue;
					Spirit_Bear_18_Initial: CFrameValue;
					Hand_end_R_Original: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							Foot_L: Bone;
							Hand_R: Bone;
							Head: Bone;
							Hand_L: Bone;
							Foot_R: Bone;
							Tail_01: Bone;
						};
					};
				};
			};
			["04_dino"]: Model & {
				Body: MeshPart & {
					["Foot.R"]: Bone;
					RootPart: Bone & {
						Body: Bone & {
							["wingP1.R"]: Bone & {
								["wingP2.R"]: Bone & {
									["wingP3.R"]: Bone & {
										["wingP4.R"]: Bone & {
											["wingP5.R"]: Bone & {
												["wingP6.R"]: Bone & {
													["wingP7.R"]: Bone & {
														["wingP8.R"]: Bone & {
															["wingP9.R"]: Bone;
														};
													};
												};
											};
										};
									};
								};
							};
							Heat: Bone;
							["wingP1.L"]: Bone & {
								["wingP2.L"]: Bone & {
									["wingP3.L"]: Bone & {
										["wingP4.L"]: Bone & {
											["wingP5.L"]: Bone & {
												["wingP6.L"]: Bone & {
													["wingP7.L"]: Bone & {
														["wingP8.L"]: Bone & {
															["wingP9.L"]: Bone;
														};
													};
												};
											};
										};
									};
								};
							};
							Tail1: Bone & {
								Tail2: Bone & {
									Tail3: Bone & {
										Tail4: Bone;
									};
								};
							};
						};
					};
					["Foot.L"]: Bone;
				};
			};
			["4_megatherium"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					BFoot_end_R_Composited: CFrameValue;
					Body_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Megatherium_4_Initial: CFrameValue;
					Body_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					BFoot_end_L_Original: CFrameValue;
					Tail_04_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					FFoot_end_L_Original: CFrameValue;
					Tail_03_Initial: CFrameValue;
					Megatherium_4_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					Tail_04_Composited: CFrameValue;
					Tail_04_Initial: CFrameValue;
					FFoot_end_R_Original: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					BFoot_R_Original: CFrameValue;
					FFoot_L_Original: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					Tail_02_Original: CFrameValue;
					Tail_01_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					FFoot_R_Original: CFrameValue;
					FFoot_end_R_Composited: CFrameValue;
					Tail_03_Original: CFrameValue;
					BFoot_L_Original: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					Tail_03_Composited: CFrameValue;
					Megatherium_4_Composited: CFrameValue;
					Head_Initial: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					BFoot_end_R_Original: CFrameValue;
					FFoot_end_L_Composited: CFrameValue;
					FFoot_end_R_Initial: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					FFoot_end_L_Initial: CFrameValue;
					BFoot_end_L_Composited: CFrameValue;
					BFoot_end_R_Initial: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					BFoot_end_L_Initial: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Head: Bone;
							FFoot_R: Bone;
							FFoot_L: Bone;
							Tail_01: Bone & {
								Tail_02: Bone & {
									Tail_03: Bone & {
										Tail_04: Bone;
									};
								};
							};
						};
					};
				};
			};
			["19_spirit_owl"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Foot_L_Original: CFrameValue;
					Wing_R_Original: CFrameValue;
					Spirit_Owl_19_Composited: CFrameValue;
					Wing_end_R_Original: CFrameValue;
					Wing_end_R_Initial: CFrameValue;
					Wing_R_Composited: CFrameValue;
					Foot_end_R_Initial: CFrameValue;
					Body_Composited: CFrameValue;
					Foot_R_Composited: CFrameValue;
					Spirit_Owl_19_Initial: CFrameValue;
					Foot_end_L_Initial: CFrameValue;
					Wing_end_L_Initial: CFrameValue;
					Foot_R_Original: CFrameValue;
					Spirit_Owl_19_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					Foot_L_Composited: CFrameValue;
					Head_Initial: CFrameValue;
					Foot_L_Initial: CFrameValue;
					Foot_R_Initial: CFrameValue;
					Wing_end_R_Composited: CFrameValue;
					Wing_end_L_Original: CFrameValue;
					Foot_end_L_Original: CFrameValue;
					Wing_R_Initial: CFrameValue;
					Wing_L_Initial: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Head_Original: CFrameValue;
					Wing_L_Original: CFrameValue;
					RootPart_Initial: CFrameValue;
					Foot_end_R_Composited: CFrameValue;
					Body_Original: CFrameValue;
					Wing_end_L_Composited: CFrameValue;
					Foot_end_R_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Wing_L_Composited: CFrameValue;
					Foot_end_L_Composited: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							Foot_L: Bone;
							Wing_R: Bone & {
								Wing_end_R: Bone;
							};
							Head: Bone;
							Foot_R: Bone;
							Wing_L: Bone & {
								Wing_end_L: Bone;
							};
						};
					};
				};
			};
			["06_mamuth"]: Model & {
				Body: MeshPart & {
					Rootpart: Bone & {
						["BLeg.L"]: Bone;
						["FLeg.R"]: Bone;
						["FLeg.L"]: Bone;
						["BLeg.R"]: Bone;
						Body: Bone & {
							Head: Bone & {
								tronk: Bone & {
									["tronk.001"]: Bone & {
										["tronk.002"]: Bone & {
											["tronk.003"]: Bone;
										};
									};
								};
							};
							tail: Bone & {
								["tail.001"]: Bone & {
									["tail.002"]: Bone & {
										["tail.003"]: Bone & {
											["tail.004"]: Bone & {
												["tail.005"]: Bone & {
													["tail.006"]: Bone;
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
			["11_scorpion"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Claws_Lower_R_Composited: CFrameValue;
					Claws_Lower_L_Initial: CFrameValue;
					Tail_01_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Scorpion_11_Initial: CFrameValue;
					Claws_R_Composited: CFrameValue;
					Foot_01_L_Original: CFrameValue;
					Tail_03_Initial: CFrameValue;
					Claws_L_Original: CFrameValue;
					Foot_02_R_Composited: CFrameValue;
					Foot_02_L_Composited: CFrameValue;
					Claws_R_Initial: CFrameValue;
					Head_Initial: CFrameValue;
					Tail_01_Composited: CFrameValue;
					Sting_Original: CFrameValue;
					Foot_end_03_L_Initial: CFrameValue;
					Claws_Lower_L_Original: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Scorpion_11_Original: CFrameValue;
					Foot_end_01_L_Original: CFrameValue;
					Foot_03_R_Composited: CFrameValue;
					Foot_end_03_L_Original: CFrameValue;
					Foot_01_R_Initial: CFrameValue;
					Body_Original: CFrameValue;
					Sting_Composited: CFrameValue;
					Foot_03_L_Original: CFrameValue;
					Foot_end_02_R_Initial: CFrameValue;
					Claws_L_Initial: CFrameValue;
					Claws_Lower_R_Original: CFrameValue;
					Claws_Lower_L_Composited: CFrameValue;
					Foot_end_02_L_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					Foot_end_03_L_Composited: CFrameValue;
					Foot_02_R_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					Foot_end_03_R_Initial: CFrameValue;
					Foot_03_L_Initial: CFrameValue;
					Foot_03_L_Composited: CFrameValue;
					Foot_02_L_Original: CFrameValue;
					Foot_end_02_L_Initial: CFrameValue;
					Foot_end_01_R_Initial: CFrameValue;
					Foot_03_R_Original: CFrameValue;
					Foot_end_01_R_Composited: CFrameValue;
					Foot_02_R_Initial: CFrameValue;
					Foot_end_02_L_Composited: CFrameValue;
					Foot_01_R_Composited: CFrameValue;
					Claws_R_Original: CFrameValue;
					RootPart_Initial: CFrameValue;
					Foot_end_02_R_Original: CFrameValue;
					Foot_02_L_Initial: CFrameValue;
					Tail_03_Original: CFrameValue;
					Foot_end_03_R_Original: CFrameValue;
					Foot_end_03_R_Composited: CFrameValue;
					Foot_end_01_L_Initial: CFrameValue;
					Foot_01_R_Original: CFrameValue;
					Tail_03_Composited: CFrameValue;
					Body_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					Foot_end_01_L_Composited: CFrameValue;
					Foot_01_L_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					Foot_01_L_Composited: CFrameValue;
					Claws_Lower_R_Initial: CFrameValue;
					Claws_L_Composited: CFrameValue;
					Foot_end_01_R_Original: CFrameValue;
					Foot_03_R_Initial: CFrameValue;
					Sting_Initial: CFrameValue;
					Scorpion_11_Composited: CFrameValue;
					Foot_end_02_R_Composited: CFrameValue;
					Tail_02_Original: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							Claws_L: Bone & {
								Claws_Lower_L: Bone;
							};
							Foot_03_L: Bone & {
								Foot_end_03_L: Bone;
							};
							Tail_01: Bone & {
								Tail_02: Bone & {
									Tail_03: Bone & {
										Sting: Bone;
									};
								};
							};
							Foot_02_R: Bone & {
								Foot_end_02_R: Bone;
							};
							Foot_01_L: Bone & {
								Foot_end_01_L: Bone;
							};
							Foot_03_R: Bone & {
								Foot_end_03_R: Bone;
							};
							Foot_01_R: Bone & {
								Foot_end_01_R: Bone;
							};
							Foot_02_L: Bone & {
								Foot_end_02_L: Bone;
							};
							Claws_R: Bone & {
								Claws_Lower_R: Bone;
							};
							Head: Bone;
						};
					};
				};
			};
			["20_spirit_wolf"]: Model & {
				AnimationController: AnimationController;
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Tail_07_Composited: CFrameValue;
					Tail_06_Composited: CFrameValue;
					BFoot_end_R_Composited: CFrameValue;
					Body_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Tail_05_Composited: CFrameValue;
					Body_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					FFoot_L_Original: CFrameValue;
					Tail_04_Original: CFrameValue;
					BFoot_end_L_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					FFoot_end_L_Original: CFrameValue;
					Spirit_Wolf_20_Initial: CFrameValue;
					Tail_03_Initial: CFrameValue;
					Tail_05_Original: CFrameValue;
					Spirit_Wolf_20_Composited: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					BFoot_L_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					FFoot_R_Original: CFrameValue;
					Tail_04_Composited: CFrameValue;
					Tail_04_Initial: CFrameValue;
					Tail_06_Original: CFrameValue;
					FFoot_end_R_Original: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					Tail_06_Initial: CFrameValue;
					Tail_07_Initial: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					Tail_02_Original: CFrameValue;
					Tail_01_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					Head_Initial: CFrameValue;
					BFoot_end_R_Original: CFrameValue;
					Tail_03_Original: CFrameValue;
					Tail_07_Original: CFrameValue;
					Spirit_Wolf_20_Original: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					Tail_03_Composited: CFrameValue;
					BFoot_R_Original: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					FFoot_end_R_Composited: CFrameValue;
					FFoot_end_L_Composited: CFrameValue;
					FFoot_end_R_Initial: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					FFoot_end_L_Initial: CFrameValue;
					BFoot_end_L_Composited: CFrameValue;
					BFoot_end_R_Initial: CFrameValue;
					Tail_05_Initial: CFrameValue;
					BFoot_end_L_Initial: CFrameValue;
				};
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Head: Bone;
							FFoot_R: Bone;
							FFoot_L: Bone;
							Tail_01: Bone & {
								Tail_02: Bone & {
									Tail_03: Bone & {
										Tail_04: Bone & {
											Tail_05: Bone & {
												Tail_06: Bone;
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
		vfx: Folder & {
			leafDrops: Part & {
				effects: ParticleEmitter;
			};
		};
	};
	hiden: Folder & {
		Assets: Folder & {
			SnowMountain: Model & {
				SnowMountainC: MeshPart;
				SnowRockA: MeshPart;
				SnowRockC: MeshPart;
				SnowMountainA: MeshPart;
				SnowMountainB: MeshPart;
				SnowRockB: MeshPart;
				SnowPineTrunk: Model & {
					PineTrunk: MeshPart;
					SnowTrunk: MeshPart;
				};
				SnowPineTree: MeshPart;
				SnowMountainD: MeshPart;
			};
			Mountains: Folder & {
				Niagara: Folder & {
					NiagaraMountainB: MeshPart;
					NiagaraMountainD: MeshPart;
					NiagaraMountainA: MeshPart;
					NiagaraMountainC: MeshPart;
				};
				Mountains: Folder & {
					MountainA: MeshPart;
					MountainD: MeshPart;
					BackMountainA: MeshPart;
					BackMountainB: MeshPart;
					MountainB: MeshPart;
					MountainC: MeshPart;
				};
				Mojave: Folder & {
					["MojaveMountain-B"]: MeshPart;
					["MojaveMountain-A"]: MeshPart;
					["MojaveMountain-D"]: MeshPart;
					["MojaveMountain-C"]: MeshPart;
				};
				MountainA: Model & {
					mountainGrass: MeshPart;
					mountainEarth: MeshPart;
				};
				Canyon: Folder & {
					["BackCanyonMountain-C"]: MeshPart;
					["CanyonMountain-A"]: MeshPart;
					["BackCanyonMountain-B"]: MeshPart;
				};
			};
			FossilProps: Folder & {
				CrateCloset: MeshPart;
				ChestCloset: MeshPart;
				OpenChest: Model & {
					Bones2: MeshPart;
					ChestOpen: MeshPart;
					Bones1: MeshPart;
					Bones4: MeshPart;
					Bones: MeshPart;
					Bones3: MeshPart;
				};
				CrateOpen: Model & {
					CrateOpen: MeshPart;
					["Bones.001"]: MeshPart;
				};
				Gift: Model & {
					gift: MeshPart;
					["Bones.001"]: MeshPart;
				};
			};
			NorthpoleMountain: Model & {
				NorthpoleMountainA: MeshPart;
				NorthpoleMountainC: MeshPart;
				NorthpoleMountainD: MeshPart;
				NorthpoleMountainB: MeshPart;
				NorthpoleMountainE: MeshPart;
			};
			WaterFalls: Folder & {
				Water: Model & {
					WatterColor: Part & {
						Texture: Texture;
					};
					WatterEffect: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
					};
				};
				["Water Flow"]: Model & {
					A: Part & {
						Attachment: Attachment & {
							Beam: Beam;
						};
					};
					B: Part & {
						Attachment: Attachment;
					};
				};
				Weaves: MeshPart & {
					["Particle 3"]: ParticleEmitter;
				};
				WaterFall: Model & {
					A: Part & {
						Attachment: Attachment;
					};
					B: Part & {
						LavaFlow: ParticleEmitter;
					};
				};
			};
			Trees: Folder & {
				MojaveTree: MeshPart;
				TreeA: MeshPart;
			};
			Plants: Folder & {
				Captus: MeshPart;
				Planta: MeshPart;
				Bush: MeshPart;
			};
			Rocks: Folder & {
				RocckA2: MeshPart;
				RocckB1: MeshPart;
				RocckB3: MeshPart;
				RocckB2: MeshPart;
				MojaveRockC: MeshPart;
				MojaveRockB: MeshPart;
				RocckA3: MeshPart;
				MojaveRockA: MeshPart;
				RocckA1: MeshPart;
			};
		};
		Jungle2: Folder & {
			Area33: Folder & {
				Decoration: Folder & {
					Vegetation: Folder & {
						Plants: Folder;
						Trees: Folder;
					};
					Mountains: Folder;
				};
			};
			JungleFloor: Part;
			Area34: Folder & {
				Decoration: Folder & {
					Vegetation: Folder & {
						Plants: Folder;
						Trees: Folder;
					};
					Mountains: Folder;
				};
			};
			Area31: Folder & {
				Decoration: Folder & {
					Vegetation: Folder & {
						Plants: Folder;
						Trees: Folder;
					};
					Mountains: Folder;
				};
			};
			Area35: Folder & {
				Decoration: Folder & {
					Vegetation: Folder & {
						Plants: Folder;
						Trees: Folder;
					};
					Mountains: Folder;
				};
			};
			Area32: Folder & {
				Decoration: Folder & {
					Vegetation: Folder & {
						Plants: Folder;
						Trees: Folder;
					};
					Mountains: Folder;
				};
			};
		};
	};
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			["@rbxts"]: Folder & {
				ripple: ModuleScript & {
					["createMotion.spec"]: ModuleScript;
					config: ModuleScript;
					solvers: Folder & {
						tween: ModuleScript;
						["linear.spec"]: ModuleScript;
						["immediate.spec"]: ModuleScript;
						["tween.spec"]: ModuleScript;
						["spring.spec"]: ModuleScript;
						spring: ModuleScript;
						linear: ModuleScript;
						immediate: ModuleScript;
					};
					utils: Folder & {
						graph: ModuleScript;
						assign: ModuleScript;
						spy: ModuleScript;
						snapshot: ModuleScript;
						intermediate: ModuleScript;
						merge: ModuleScript;
					};
					createMotion: ModuleScript;
					types: ModuleScript;
				};
				roact: Folder & {
					src: ModuleScript & {
						createSpy: ModuleScript;
						createSignal: ModuleScript;
						oneChild: ModuleScript;
						Component: ModuleScript;
						createElement: ModuleScript;
						createReconciler: ModuleScript;
						GlobalConfig: ModuleScript;
						strict: ModuleScript;
						createRef: ModuleScript;
						Type: ModuleScript;
						Portal: ModuleScript;
						Symbol: ModuleScript;
						PropMarkers: Folder & {
							Ref: ModuleScript;
							Change: ModuleScript;
							Children: ModuleScript;
							Event: ModuleScript;
						};
						ComponentLifecyclePhase: ModuleScript;
						Config: ModuleScript;
						assign: ModuleScript;
						assertDeepEqual: ModuleScript;
						getDefaultInstanceProperty: ModuleScript;
						Binding: ModuleScript;
						NoopRenderer: ModuleScript;
						forwardRef: ModuleScript;
						internalAssert: ModuleScript;
						createReconcilerCompat: ModuleScript;
						createFragment: ModuleScript;
						RobloxRenderer: ModuleScript;
						PureComponent: ModuleScript;
						invalidSetStateMessages: ModuleScript;
						ElementKind: ModuleScript;
						createContext: ModuleScript;
						Logging: ModuleScript;
						ElementUtils: ModuleScript;
						SingleEventManager: ModuleScript;
						None: ModuleScript;
					};
				};
				["camera-shaker"]: Folder & {
					CameraShaker: ModuleScript & {
						CameraShakeInstance: ModuleScript;
						CameraShakePresets: ModuleScript;
					};
				};
				services: ModuleScript;
				net: Folder & {
					out: ModuleScript & {
						definitions: ModuleScript & {
							ServerDefinitionBuilder: ModuleScript;
							NamespaceBuilder: ModuleScript;
							ClientDefinitionBuilder: ModuleScript;
							Types: ModuleScript;
						};
						messaging: Folder & {
							ExperienceBroadcastEvent: ModuleScript;
							MessagingService: ModuleScript;
						};
						client: ModuleScript & {
							ClientFunction: ModuleScript;
							ClientEvent: ModuleScript;
							ClientAsyncFunction: ModuleScript;
						};
						internal: ModuleScript & {
							validator: ModuleScript;
							tables: ModuleScript;
						};
						middleware: ModuleScript & {
							RateLimitMiddleware: ModuleScript & {
								throttle: ModuleScript;
							};
							LoggerMiddleware: ModuleScript;
							TypeCheckMiddleware: ModuleScript;
						};
						server: ModuleScript & {
							ServerEvent: ModuleScript;
							ServerAsyncFunction: ModuleScript;
							ServerFunction: ModuleScript;
							MiddlewareFunction: ModuleScript;
							NetServerScriptSignal: ModuleScript;
							CreateServerListener: ModuleScript;
							ServerMessagingEvent: ModuleScript;
							MiddlewareEvent: ModuleScript;
						};
					};
				};
				remoteevent: Folder & {
					main: ModuleScript;
					["readme-image"]: Folder;
				};
				["compiler-types"]: Folder & {
					types: Folder;
				};
				types: Folder & {
					include: Folder & {
						generated: Folder;
					};
				};
			};
		};
	};
}












